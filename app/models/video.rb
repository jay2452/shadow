class Video < ActiveRecord::Base

	# include FriendlyId
	# friendly_id :name, use: :slugged

	has_attached_file :media
		validates_attachment :media
		validates_attachment_content_type :media, content_type: %w(video/mp4 video/avi video/webm)
end
