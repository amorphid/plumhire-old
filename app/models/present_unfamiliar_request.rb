class PresentUnfamiliarRequest
  PARAMS_TO_REJECT = [
    "action",
    "controller",
    "path"
    ]

  def present(request)
    route_as_json(
      route_as_hash(request))
  end

  def route_as_hash(request)
    {
      method: request.method,
      params: rejected_params(request.params),
      path:   request.path
    }
  end

  def route_as_json(route)
    route.to_json
  end

  def rejected_params(params)
    params.reject do |param, _|
      reject_param?(param)
    end
  end

  def reject_param?(param)
    PARAMS_TO_REJECT.include?(param)
  end
end
