local room_id = ARGV[1]
local track = redis.call('lrange', 'room:' .. room_id .. ':change-track-list', -1, -1)[1]

if track ~= nil then
  redis.call('del', 'room:' .. room_id .. ':change-track-list')
end

return track
