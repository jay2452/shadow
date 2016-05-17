class Category < ActiveRecord::Base

	include FriendlyId
	friendly_id :name, use: :slugged

	has_many :videos
	has_many :photos
end
