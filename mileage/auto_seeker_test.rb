require "minitest/autorun"
require "./auto_seeker"

describe AutoSeeker do
  before do
    data = [
      [1,'Red',12999,20.0,'gas'],
      [2,'Blue',13999,25.0,'gas'],
      [3,'Teal',19000,27.0,'gas'],
      [4,'Red',14999,40.0,'diesel'],
      [5, 'Teal',12333, nil,'hamsters']
    ]
    # by adding an auto object without a mileage, we can test whether this will break it.

    @seeker = AutoSeeker.new data
  end


  describe "#filter " do
    it "can filter by color " do
      @seeker.filter 'color', 'Red'
      @seeker.autos.collect(&:color).uniq.must_equal ['Red']
    end

    it "can filter by fuel" do
      @seeker.filter 'fuel', 'gas'
      @seeker.autos.collect(&:fuel).uniq.must_equal ['gas']
    end

    it "can filter by exact price" do
      @seeker.filter 'price', 12333
      @seeker.autos.length.must_equal 1
    end

    it "can filter when given a range of prices" do
      @seeker.filter 'price', [12000,14000]
      @seeker.autos.length.must_equal 3
    end

  end

  describe ".median_mileage " do
    it "calculates median mileage for all autos" do
      AutoSeeker.median_mileage(@seeker.autos).must_equal 26.0
    end

    it "ignores cars without a mileate present" do
      @seeker.filter 'color', 'Teal'
      AutoSeeker.median_mileage(@seeker.autos).must_equal 27.0
    end

  end
end
