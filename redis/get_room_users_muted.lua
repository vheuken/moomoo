local room_id = ARGV[1]

local users_with_ids = redis.call('hgetall', 'room:' .. room_id .. ':users')
local users_muted = {}

for i=1, #users_with_ids - 1, 2 do
  local id = users_with_ids[i]
  users_muted[i] = id
  users_muted[i+1] = redis.call('get', 'users:' .. id .. ':muted?')
end

return users_muted
