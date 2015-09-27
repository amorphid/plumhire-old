class PresentJobs
  def present
    { jobs: Job.all }
  end
end
