Beginning list of API calls

========================ADMIN========================

        -------------------------------item attributes-------------------------------

GET list incl deleted:              api/admin/categories
                                    api/admin/genders
                                    api/admin/sizes


GET single record incl deleted:     api/admin/categories/:id([0-9]+)
                                    api/admin/genders/:id([0-9]+)
                                    api/admin/sizes/:id([0-9]+)

POST new record*:                   api/admin/categories
                                    api/admin/genders
                                    api/admin/sizes

PATCH edit name single record*:     api/admin/categories/:id([0-9]+)
                                    api/admin/genders/:id([0-9]+)
                                    api/admin/sizes/:id([0-9]+)

PATCH undelete single record:       api/admin/categories/undelete/:id([0-9]+)
                                    api/admin/genders/undelete/:id([0-9]+)
                                    api/admin/sizes/undelete/:id([0-9]+)

DELETE single record:               api/admin/categories/:id([0-9]+)
                                    api/admin/genders/:id([0-9]+)
                                    api/admin/sizes/:id([0-9]+)


*requires request body eg:

{
    "name": "Shoes"
}


========================USER========================

        -------------------------------item attributes-------------------------------

GET list excl deleted:              api/attr/categories
                                    api/attr/genders
                                    api/attr/sizes

GET single record excl deleted:     api/attr/categories/:id([0-9]+)
                                    api/attr/genders/:id([0-9]+)
                                    api/attr/sizes/:id([0-9]+)
