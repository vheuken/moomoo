local room_id = ARGV[1]

local track_id_hashes = redis.call('hgetall', 'room:' .. room_id .. ':music-info')
local uploaders = {}
local uploaders_iter = 1

for i=2, #track_id_hashes, 2 do
  track_id_hashes[i] = {track_id_hashes[i],
                        redis.call('get', 'track:' .. track_id_hashes[i-1] .. ':uploader')}
end

return track_id_hashes
