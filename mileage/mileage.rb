require 'csv'
require './auto_seeker'

data = CSV.read('foobarnian_autos.csv')

seeker = AutoSeeker.new data
autos = seeker.filter(:color, ARGV[0])

if autos.length == 0
  abort "no autos with color #{ARGV[0]} found"
end

mileage = AutoSeeker.median_mileage(autos)

puts "median mileage = #{mileage} MPG"


# 816,Teal,26957.47,,hybrid was the problem line. The code does not account for a nil mileage. There are two ways to fix this. Either ensure that the mileage is present before creating a car object - either include a default or raise an error there, or exclude all cars without a mileage to calculate the median. I'm going to implement the latter, as the former would skew results
