local room_id = ARGV[1]
local track_id = ARGV[2]
local next_track_id = nil

local track_order = redis.call('hgetall', 'room:' .. room_id .. ':track-order')
local sorted_track_order = {}

local p = 0
for i=1, #track_order, 2 do
  for a=1, #track_order, 2 do
    local key = track_order[a]

    if tonumber(key) == p then
      sorted_track_order[i] = key
      sorted_track_order[i+1] = track_order[a+1]
    end
  end
  p = p + 1
end

track_order = sorted_track_order

for i=2, #track_order, 2 do
  if track_order[i] == track_id then
    next_track_id = track_order[i+2]

    redis.call('hdel', 'room:' .. room_id .. ':track-order', track_order[i-1])

    for a=i+2, #track_order, 2 do
      local id = track_order[a]
      local old_key = track_order[a-1]
      local new_key = tostring(tonumber(old_key) - 1)

      redis.call('hset', 'room:' .. room_id .. ':track-order', new_key, id)

      if a == #track_order then
        redis.call('hdel', 'room:' .. room_id .. ':track-order', old_key)
      end
    end

    return {track_order[i-1], next_track_id}
  end
end

return nil
