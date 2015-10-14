local room_id = ARGV[1]
local track_id = ARGV[2]
local next_track_id = nil

local current_track_num = redis.call('get', 'room:' .. room_id .. ':current-track')
local current_track_id  = redis.call('hget', 'room:' .. room_id .. ':track-order', current_track_num)

if current_track_id ~= nil and current_track_id == track_id then
  redis.call('set', 'room:' .. room_id .. ':waiting-to-start?', 'false')
  redis.call('set', 'room:' .. room_id .. ':started?', 'false')
  redis.call('del', 'room:' .. room_id .. ':current-sound')
end

local track_order = redis.call('hgetall', 'room:' .. room_id .. ':track-order')
local sorted_track_order = {}

redis.call('hdel', 'room:' .. room_id .. ':music-info', track_id)

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

    redis.call('set', 'room:' .. room_id .. ':current-track', track_order[i-1])
    return {track_order[i-1], next_track_id}
  end
end

return nil
