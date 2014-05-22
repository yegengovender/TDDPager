TDDPager
========

Simple javascript library for paging data. Splits data into 'pages' array.


Usage
	var pager = new Pager(_data_, _itemsPerPage_, _[range]_)
	
	
Params
------

**data**: An array to page through.

**itemsPerPage**: The maximum number of items each page will contain.

**range**: (optional) The number of visible page numbers that can be used to render the navigation. If ommitted all page numbers will be shown.


Output
------


**pager.pages**: _Array_. Each item contains a subset of the original data per page.

**pager.currentPageNumber**: _Int_. Current page of navigation. Defaults to 1.

**pager.lastPageNumber**: _Int_. Last page of navigation.

**pager.pageNumbers**: _Array[Int]_. Collection of page numbers

**pager.visiblePageNumbers()**: Returns _Array[Int]_. Collection of page numbers visible during navigation

**pager.goToPage(_Int pageNumber_)**: Changes current page number to page specified.

**pager.nextPage()**: Changes current page number to next page.

**pager.previousPage()**: Changes current page number to previous page.


Example
-------
### JS
	var list = [....];
	$scope.pager = new Pager(list, 20, 8);


###Markup
	<a class="btn btn-info" href="#" ng-click="pager.goToPage(1)"><<</a>
	<a class="btn btn-info" href="#" ng-click="pager.previousPage()"><</a>
	<div class="fullsize-pager">
	<a class="btn" href="#"
	   ng-repeat="pageNumber in pager.visiblePageNumbers()"
	   ng-click="pager.goToPage(pageNumber)"
	   ng-class="{'btn-primary': (pager.currentPageNumber == pageNumber), 'btn-info': (pager.currentPageNumber != pageNumber)}">
	    {{pageNumber}}
	</a>                
	</div>
	<div class="mobile-pager">Page {{pager.currentPageNumber}} / {{pager.pages.length - 1}}</div>
	<a class="btn btn-info" href="#" ng-click="pager.nextPage()">></a>
	<a class="btn btn-info" href="#" ng-click="pager.goToPage(pager.lastPageNumber)">>></a>
  
  
  
