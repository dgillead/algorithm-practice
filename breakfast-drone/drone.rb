require 'pry'

def uniqueID(ids)
  idsOccurence = {}

  ids.each do |id|
    if idsOccurence.include?(id)
      idsOccurence[id] += 1
    else
      idsOccurence[id] = 1
    end
  end

  idsOccurence.each do |id, occurence|
    if occurence == 1
      puts id
    end
  end
end

uniqueID([1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8]); # should return 3
