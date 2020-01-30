class Haircut < ApplicationRecord
    validates :haircut_name, :path, uniqueness:true, presence:true
    
end
