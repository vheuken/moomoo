local users = redis.call('hgetall', 'room:' .. ARGV[1] .. ':users')

if next(users) == nil then
  local keys = redis.call('keys', 'room:' .. ARGV[1] .. ':*')

  for i=1,#keys,5000 do
    redis.call('del', unpack(keys, i, math.min(i+4999, #keys)))
  end

  return nil
end

local newIndex = 1
local prunedUsers = {}

for i=2,#users,2 do
  prunedUsers[newIndex] = users[i]
  newIndex = newIndex + 1
end

return prunedUsers
