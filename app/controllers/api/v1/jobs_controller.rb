module Api
  module V1
    class JobsController < ApplicationController
      def index
        render json: PresentJobs.new.present
      end
    end
  end
end
