# jquery.event.clickOutside

### A special event for jQuery

Fires a `clickOutside` event when a `click` event is fired on any target _except_ for the bound element.

An example use case would be for a lightbox that you can close by clicking anywhere outside of the lightbox. See example.html for a working example of this scenario.

### Work in progress…
This is my first shot at building a special event for jQuery. Thanks to <a href="http://benalman.com/news/2010/03/jquery-special-events/" target="_blank">Ben Alman</a> for explaining how to do this.

That being said, it could still use some work:

- Unbinding events is _functional_, but it may leave you with some zomebie `click focus` events bound to the `document.`
	- I tried fixing this by namespacing the events with `handleObj.guid` but my `guid` we'ren't coming out all that `gu`. If someone want to show me how to do this, I'd be much obliged!
	
Have fun!