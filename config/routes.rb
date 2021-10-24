Rails.application.routes.draw do
  devise_for :users, only: [:sessions, :registrations, :passwords]

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
    default_url_options :host => "localhost:3000"
  end

  root '/', :controller => 'home', :action => 'index'
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
