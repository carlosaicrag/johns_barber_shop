

json.haircuts do 
    @haircuts.each do |haircut|
        json.set! haircut.id do 
            json.extract! haircut, :id, :haircut_name, :path
        end
    end
end