class Photo < ActiveRecord::Base

	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
	validates_attachment :image
	validates_attachment_content_type :image, content_type: %w(image/jpeg image/jpg image/png)
end
