class UnfamiliarRequestsController < ApplicationController
  def index
    @unfamiliar_request = PresentUnfamiliarRequest.new.present(request)
  end
end
