### **Hours Exceptions**

X-Authorization?   | HTTP Verb | URI                                              | Description
:----------------: | --------- | ------------------------------------------------ | ---------------------------------------------------------
:heavy_minus_sign: | GET       | api/hours_exception                              | Retrieves all hours exceptions, ordered by date.
:heavy_minus_sign: | GET       | api/hours_exception/category/{***category_id***} | Retrieves all hours exceptions within specified category, ordered by date.
:heavy_minus_sign: | GET       | api/hours_exception/{***id***}                   | Retrieves specified hours exception.
:heavy_check_mark: | POST      | api/hours_exception                              | Creates new hours exception.
:heavy_check_mark: | PUT       | api/hours_exception/{***id***}                   | Updates specified hours exception.
:heavy_check_mark: | DELETE    | api/hours_exception/{***id***}                   | Deletes specified hours exception.

#
Input         | Optional?          | Validation Rules
------------- | :----------------: | ----------------
`day`         | :heavy_minus_sign: | `date`
`open`        | :heavy_minus_sign: | `time`
`close`       | :heavy_minus_sign: | `time`
`closed`      | :heavy_minus_sign: | `boolean`
`category_id` | :heavy_check_mark: |

#
Output        | Type      | Format
------------- | :-------: | ---------------
`id`          | `integer` |
`day`         | `string`  | `mm dd, yyyy`
`open`        | `string`  | `hh:mm[am|pm]`
`close`       | `string`  | `hh:mm[am|pm]`
`closed`      | `boolean` | 
`category_id` | `integer` |
