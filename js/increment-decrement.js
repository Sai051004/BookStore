// Quantity increment/decrement functionality
// Requires jQuery

(function() {
  'use strict';
  
  function incrementValue(e) {
    e.preventDefault();
    const fieldName = $(e.target).data('field');
    const parent = $(e.target).closest('div');
    const input = parent.find('input[name=' + fieldName + ']');
    const max = parseInt(input.attr('max')) || Infinity;
    let currentVal = parseInt(input.val(), 10);
  
    if (!isNaN(currentVal)) {
      if (currentVal < max) {
        input.val(currentVal + 1);
        // Trigger change event for cart updates
        input.trigger('change');
      }
    } else {
      input.val(1);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    const fieldName = $(e.target).data('field');
    const parent = $(e.target).closest('div');
    const input = parent.find('input[name=' + fieldName + ']');
    const min = parseInt(input.attr('min')) || 1;
    let currentVal = parseInt(input.val(), 10);
  
    if (!isNaN(currentVal) && currentVal > min) {
      input.val(currentVal - 1);
      // Trigger change event for cart updates
      input.trigger('change');
    } else {
      input.val(min);
    }
  }

  // Wait for DOM to be ready
  if (typeof jQuery !== 'undefined') {
    $(document).ready(function() {
      $('.input-group').on('click', '.button-plus', function(e) {
        incrementValue(e);
      });
      
      $('.input-group').on('click', '.button-minus', function(e) {
        decrementValue(e);
      });
      
      // Prevent manual input of invalid values
      $('.quantity-field').on('blur', function() {
        const min = parseInt($(this).attr('min')) || 1;
        const max = parseInt($(this).attr('max')) || Infinity;
        let value = parseInt($(this).val(), 10);
        
        if (isNaN(value) || value < min) {
          $(this).val(min);
        } else if (value > max) {
          $(this).val(max);
        }
      });
    });
  }
})();
