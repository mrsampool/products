#!/bin/bash

function sqlrun() {

  sqlroot="/Users/sampool/Library/Mobile Documents/com~apple~CloudDocs/Media Projects/Hack Reactor/course/Capstones/sdc/products/db/sqlScripts"
  file=$1
  psql < "${sqlroot}/${file}.sql" -U postgres -d sdc_products -W

}