local room_id = ARGV[1]
local title = ARGV[2]
local timestamp = ARGV[3]
local cooldown_time = tonumber(ARGV[4])

local old_timestamp = redis.call('get', 'room:' .. room_id .. ':control:' .. title .. ':time')

if old_timestamp == nil then
  if (tonumber(timestamp) - tonumber(old_timestamp)) <= cooldown_time then
    return 0
  end
end

redis.call('set',  'room:' .. room_id .. ':control:' .. title .. ':time', timestamp)
return 1
