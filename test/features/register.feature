# @regression
# Feature: KasirAja Register Tests

#     @all @positive @smoke
#     Scenario: Register successfully with valid input
#         Given I open KasirAja website
#         When I click on "ingin mencoba, daftar?" link
#         And I fill the form with valid input
#         Then I should be redirect to Login Page

#     @all @negative
#     Scenario: Verify register failed with "nama toko" is blank
#         Given I open KasirAja website
#         When I click on "ingin mencoba, daftar?" link
#         And I empty the "nama toko" field 
#         And I click on "daftar" button
#         Then I should see an "name" is not allowed to be empty message

#     @all @negative
#     Scenario: Verify register failed with existing email
#         Given I open KasirAja website
#         When I click on "ingin mencoba, daftar?" link
#         And I fill the email field with existing email
#         Then I should see an error message
