require './auto'
require 'byebug'
class AutoSeeker

  def initialize data
    @data = data
    autos
  end

  def filter options
    [:low_price, :high_price, :color, :fuel, :price].each do |sym|
      if options[sym]
        filter = "filter_by_" + sym.to_s
        self.send(filter.to_sym, options[sym])
      end
    end
    @autos
  end

  def filter_by_low_price low_price
    @autos.select! { |auto| auto.price >= low_price}
  end

  def filter_by_high_price high_price
    @autos.select! { |auto| auto.price <= high_price}
  end

  def filter_by_color color
    @autos.select! { |auto| auto.color == color }
  end

  def filter_by_fuel fuel
    @autos.select! { |auto| auto.fuel == fuel }
  end

  def filter_by_price price
    @autos.select! { |auto| auto.price == price}
  end

  def autos
    @autos ||= @data.map do |row|
      Auto.new(row)
    end
  end

  def self.median_mileage autos
    prices = autos.collect(&:mileage).compact.sort
    (prices[(prices.length - 1) / 2].to_f + prices[prices.length / 2].to_f) / 2.0
  end
end
