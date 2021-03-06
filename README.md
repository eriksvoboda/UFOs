# UFOs

## Purpose of Project

The purpose of this project is to take the dynamic table that was previously built and allow users to filter for multiple criteria. We also eliminate the filter button and update the project to search for the criteria based on when info is input into the fields.

## How to use the Search

In order to use the new search capabilities, first begin by entering a value into one of the five fields. Hit "enter" once the info is input into the field and watch as the table filters for all data matching that filter. 

![](/filter_images/one_filter.png)

In order to add a second filter, simply input a value into one of the other four fields and hit "enter" then watch as the table updates for the new criteria.

![](/filter_images/two_filters.png)

All five filters can be used if desired and the table will continue to filter for any matching data. 

## Drawbacks

A drawback of this design is that if one filter is entered but then one or multiple other filters are entered then and no data matches the additional filters, the table will pull back no data if there's no matches for the all the filters applied. An improvement to the design would be to be able to save filters so users don't have to reapply filters over and over. Also another improvement would be to change the code so if there are two filters applied that have matching results the table doesn't go blank if a thrid filter is applied that causing nothing to match with that thrid filter applied. 
