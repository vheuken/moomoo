local room_id = ARGV[1]

local users_socket_ids = redis.call('hgetall', 'room:' .. room_id .. ':users')
local users_muted = {}
local users_muted_iter = 1

for i=1, #users_socket_ids - 1, 2 do
  local id = users_socket_ids[i]
  users_muted[users_muted_iter] = id
  users_muted[users_muted_iter+1] = redis.call('get', 'users:' .. id .. ':muted?')
  users_muted_iter = users_muted_iter + 2
end

return {users_socket_ids, users_muted}
