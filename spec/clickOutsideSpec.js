/**
 * Jasmine spec for
 * `clickOutside` jQuery special event
*/
describe("A clickOutside event", function() {
    var $base = $('<div />');
    var $target = $base.clone();
    var $notTarget = $base.clone();
    var $targetChildA = $base.clone().addClass('childA').appendTo($target);
    var $targetChildB = $base.clone().addClass('childB').appendTo($target);

    var isTriggered;
    var setTriggered = function() {
        isTriggered = true;
    }
    var resetTriggered = function() {
        isTriggered = false;
    }

    beforeEach(function() {
        $target.add($notTarget).appendTo('body');
    });
    afterEach(function() {
        $target.add($notTarget).off('.jasmine').remove();
        resetTriggered();
    });

    it("is triggered when clicking outside of an element", function() {
        $target.on('clickOutside.jasmine', setTriggered)

        $notTarget.click();

        expect(isTriggered).toBe(true);
    });

    it("is not triggered when clicking on an element", function() {
        $target.on('clickOutside.jasmine', setTriggered);
        $target.click();
        expect(isTriggered).toBe(false);
    });

    it("is bound correctly using event delegation syntax", function() {
        $target.on('clickOutside.jasmine', '.childA', setTriggered);
        $targetChildB.click();
        expect(isTriggered).toBe(true);
    });

    it("can be unbound in isolation", function() {
        var tA = false, tB = false;
        $target.on('clickOutside.jasmine.tA', function() {
           tA = true;
        });
        $target.on('clickOutside.jasmine.tB', function() {
           tB = true;
        });

        // Remove tB binding
        $target.off('.tB');
        $notTarget.click();

        expect(tA).toBe(true);
        expect(tB).toBe(false);
    });

    it("can handle multiple bindings", function() {
        var tA = false, tB = false;
        $target.on('clickOutside.jasmine.tA', function() {
            tA = true;
        });
        $target.on('clickOutside.jasmine.tB', function() {
            tB = true;
        });

        $notTarget.click();

        expect(tA).toBe(true);
        expect(tB).toBe(true);
    });
});