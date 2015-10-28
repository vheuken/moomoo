local room_id = ARGV[1]

local track_id_hashes = redis.call('hgetall', 'room:' .. room_id .. ':music-info')
local music_info_array = {}
local music_info_iter = 1

for i=2, #track_id_hashes, 2 do
  music_info_array[music_info_iter] = redis.call('get', 'file-hash:' .. track_id_hashes[i])
  music_info_iter = music_info_iter + 1
end

return music_info_array
