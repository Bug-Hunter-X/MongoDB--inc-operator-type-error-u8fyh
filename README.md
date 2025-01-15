# MongoDB $inc Operator Type Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value.  However, if the value provided is not a number (e.g., a string), a type error will occur.

## Bug Description
The bug arises from providing a string value to the `$inc` operator instead of a number.  This results in an error when attempting to update the document.

## Solution
The solution involves ensuring that the value provided to `$inc` is a valid number.  Correcting this simple type error resolves the issue.
