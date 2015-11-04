local users = redis.call('hgetall', 'room:' .. ARGV[1] .. ':users')

if next(users) == nil then
  local keys = redis.call('keys', 'room:' .. ARGV[1] .. ':*')
  local track_order = redis.call('hgetall', 'room:' .. ARGV[1] .. ':track-order')
  local files_to_delete = {}
  local files_to_delete_iter = 1

  for i=2, #track_order, 2 do
    local track_id = track_order[i]
    local file_hash = redis.call('hget', 'room:' .. ARGV[1] .. ':music-info', track_id)
    local num_of_tracks = redis.call('decr', 'file-hash:' .. file_hash .. ':num-of-tracks')
    if num_of_tracks == 0 then
      files_to_delete[files_to_delete_iter] = redis.call('get', 'file-hash:' .. file_hash .. ':file')
      files_to_delete[files_to_delete_iter + 1] = redis.call('get', 'file-hash:' .. file_hash .. ':picture')
      files_to_delete_iter = files_to_delete_iter + 2
      redis.call('del', 'file-hash:' .. file_hash .. ':file')
      redis.call('del', 'file-hash:' .. file_hash .. ':picture')
      redis.call('del', 'file-hash:' .. file_hash .. ':num-of-tracks')
      redis.call('del', 'file-hash:' .. file_hash)
    end

    redis.call('del', 'track:' .. track_id .. ':uploader')
  end

  for i=1,#keys,5000 do
    redis.call('del', unpack(keys, i, math.min(i+4999, #keys)))
  end


  return {{}, files_to_delete}
end

local newIndex = 1
local prunedUsers = {}

for i=2,#users,2 do
  prunedUsers[newIndex] = users[i]
  newIndex = newIndex + 1
end

return {prunedUsers, nil}
