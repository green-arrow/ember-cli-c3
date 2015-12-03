[![Build Status](https://travis-ci.org/green-arrow/ember-cli-c3.svg?branch=master)](https://travis-ci.org/green-arrow/ember-cli-c3)

# DEPRECATED: Please use [ember-c3](https://github.com/Glavin001/ember-c3) instead.

# ember-cli-c3

A simple ember-cli wrapper for C3. Inspired by [ember-c3](https://github.com/Glavin001/ember-c3).

## Installation

`ember install:addon ember-cli-c3`

## Use

`{{c3-chart data=data config=config}}`

`data`: The C3 data object which contains the data source (rows, columns, url), type, etc. Anything included in the
data hash in the C3 examples goes here.

`config`: Everything outside of the data hash, such as chart type configuration (eg. a pie chart title, etc).

## Additional info

This is meant to be a very thin wrapper around C3 and is currently a very naive implementation without a wide array
of support for various C3 functions. 

In the future, I hope to make this more extensible so that you can directly
access the C3 chart object and call C3 functions (such as unload, etc) directly.

Please feel free to fork this on Github or open an issue if you run into anything bad!
