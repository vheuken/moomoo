local room_id = ARGV[1]
local changing = redis.call('get', 'room:' .. room_id .. 'changing-track?')

if (changing == false) or (changing == 'false') then
  redis.call('set', 'room:' .. room_id .. ':changing-track?', 'true')
end

return changing
