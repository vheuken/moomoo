local file_hash = ARGV[1]

return redis.call('get', 'file-hash:' .. file_hash)
