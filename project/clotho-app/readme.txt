Beginning list of API calls

========================ADMIN========================

        -------------------------------item attributes-------------------------------

GET list incl deleted:              api/admin/categories
                                    api/admin/genders
                                    api/admin/sizes


GET single record incl deleted:     api/admin/categories/:id([0-9]+)
                                    api/admin/genders/:id([0-9]+)
                                    api/admin/sizes/:id([0-9]+)

POST new record:                    api/admin/categories
                                    api/admin/genders
                                    api/admin/sizes

PATCH edit name single record:      api/admin/categories/:id([0-9]+)
                                    api/admin/genders/:id([0-9]+)
                                    api/admin/sizes/:id([0-9]+)

PATCH undelete single record:       api/admin/categories/undelete/:id([0-9]+)
                                    api/admin/genders/undelete/:id([0-9]+)
                                    api/admin/sizes/undelete/:id([0-9]+)

DELETE single record:               api/admin/categories/:id([0-9]+)
                                    api/admin/genders/:id([0-9]+)
                                    api/admin/sizes/:id([0-9]+)


        -------------------------------users-------------------------------

GET list incl deleted:              api/admin/users
GET by id incl deleted:             api/admin/users/:id([0-9]+)
POST new user:                      api/admin/users
PUT edit existing user:             api/admin/users/:id([0-9]+)
DELETE user:                        api/admin/users/:id([0-9]+)
PATCH undelete user:                api/admin/users/undelete/:id([0-9]+)


========================USER========================

        -------------------------------item attributes-------------------------------

GET list excl deleted:              api/attr/categories
                                    api/attr/genders
                                    api/attr/sizes

GET single record excl deleted:     api/attr/categories/:id([0-9]+)
                                    api/attr/genders/:id([0-9]+)
                                    api/attr/sizes/:id([0-9]+)




****************** ADDITIONAL NOTES ***********************

DB connection:
Credentials go in server/config/config.json

JWT secrets:
see note in OneDrive

Note about model aliases:
So far, Users are associated to Listings and Orders with the aliases 'seller' and 'buyer', respectively.
(below: not yet implemented)
When necessary, JSON response objects will include a nested user object under the appropriate alias in order to access relevant details.
Example: 'order.buyer.username' and 'listing.seller.username'

Note about retrieving other details from server:
Errors sent from API include both 'status' and 'message' properties to be used in front as needed.
So far, POST, PATCH, and DELETE responses include a 'message' property and, where relevant, a nested model object reflecting changes made.