local room_id = ARGV[1]
local track_id = ARGV[2]
local destination_track_num = tonumber(ARGV[3])

local raw_track_order = redis.call('hgetall', 'room:' .. room_id .. ':track-order')

local function index_of(arr, item)
  for i=1, #arr, 1 do
    if arr[i] == item then
      return i
    end
  end
end

local function get_track_num_from_id (id, track_order)
  return tonumber(track_order[index_of(track_order, id)-1])
end

local track_num = get_track_num_from_id(track_id, raw_track_order)

if track_num > destination_track_num then
  -- increment all from destination_track_num
  for i=1, #raw_track_order-1, 2 do
    local n = tonumber(raw_track_order[i])

    if n <= track_num and n >= destination_track_num then
      raw_track_order[i] = tostring(n+1)
    end
  end
else
  -- decrement all from destination_track_num
  for i=1, #raw_track_order-1, 2 do
    local n = tonumber(raw_track_order[i])

    if n >= track_num and n <= destination_track_num then
      raw_track_order[i] = tostring(n-1)
    end
  end
end

-- set track_id to destination_track_num
raw_track_order[index_of(raw_track_order, track_id)-1] = tostring(destination_track_num)

redis.call('del', 'room:' .. room_id .. ':track-order')

for i=1, #raw_track_order-1, 2 do
  local num = raw_track_order[i]
  local id  = raw_track_order[i+1]
  redis.call('hset', 'room:' .. room_id .. ':track-order', num, id)
end

return "A"
