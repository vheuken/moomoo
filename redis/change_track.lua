local room_id = ARGV[1]
local track_num = ARGV[2]
local sound_id = ARGV[3]

redis.call('set', 'room:' .. room_id .. ':started?', 'false')

redis.call('del', 'room:' .. room_id .. ':sync-start')

local num_tracks = redis.call('hlen', 'room:' .. room_id .. ':music-info')

if (tonumber(track_num) < 0) or
   (tonumber(track_num) >= tonumber(num_tracks)) then
  return nil
end

redis.call('del', 'room:' .. room_id .. ':track-complete')

local track_id = redis.call('hget', 'room:' .. room_id .. ':track-order', track_num)

redis.call('set', 'room:' .. room_id .. ':current-track', track_num)

redis.call('set', 'room:' .. room_id .. ':current-sound', sound_id)

return track_id
