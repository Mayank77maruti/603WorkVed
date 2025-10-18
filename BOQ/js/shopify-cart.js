$(function () {

  // check if the product is shopifyable
  // if($('#not_shopifyable_product').length!=0 && $('#not_shopifyable_product').val()=="TRUE") {
  if (false) {
    // do nothing! //return;
  }
  else {
    /* Build new ShopifyBuy client
    ============================================================ */
    var client = ShopifyBuy.buildClient({
      /*apiKey: 'bf081e860bc9dc1ce0654fdfbc20892d',*/
      /*apiKey: _s_settigns.apiKey,*/
      accessToken: _s_settigns.apiKey,
      /*domain: 'embeds.myshopify.com',*/
      domain: _s_settigns.domain,
      appId: _s_settigns.appId,
    });


    var product;
    var cart;
    var cartLineItemCount;
    if (localStorage.getItem('lastCartId')) {
      console.log('ENTERING INTO THE CART!');
      client.fetchCart(localStorage.getItem('lastCartId')).then(function (remoteCart) {
        cart = remoteCart;
        cartLineItemCount = cart.lineItems.length;
        renderCartItems();
      });
    } else {
      console.log('ENTERING 2');
      client.createCart().then(function (newCart) {
        cart = newCart;
        localStorage.setItem('lastCartId', cart.id);
        cartLineItemCount = 0;
      });
    }

    var previousFocusItem;

    var _is_shoppify_product = true;

    /* Fetch product and init
    ============================================================ */
    client.fetchQueryProducts({ handle: _s_settigns.cHandle }).then(function (fetchedProduct) {
      // Your product is at products[0] if successful
      product = fetchedProduct[0];
      if (typeof (product) != "undefined") {

        var selectedVariant = product.selectedVariant;
        var selectedVariantImage = product.selectedVariantImage;
        var currentOptions = product.options;

        var variantSelectors = generateSelectors(product);
        $('.variant-selectors').html(variantSelectors);


        updateProductTitle(product.title);
        updateVariantImage(selectedVariantImage);
        updateVariantTitle(selectedVariant);
        updateVariantPrice(selectedVariant);
        selectDefaultVariant(product)
        attachOnVariantSelectListeners(product);

      }
      else {

        _is_shoppify_product = false;
        attachOnVariantSelectListenersNoProduct();

      }
      updateCartTabButton();
      bindEventListeners();
      updateCartLinks();

    });
  }

  /* Fetch product and init
  ============================================================ *
  //client.fetchProduct('3614436099').then(function (fetchedProduct) {
  client.fetchProduct(_s_settigns.cPid).then(function (fetchedProduct) {
    product = fetchedProduct;
  console.log(product);
    var selectedVariant = product.selectedVariant;
    var selectedVariantImage = product.selectedVariantImage;
    var currentOptions = product.options;

    var variantSelectors = generateSelectors(product);
    $('.variant-selectors').html(variantSelectors);


    updateProductTitle(product.title);
    updateVariantImage(selectedVariantImage);
    updateVariantTitle(selectedVariant);
    updateVariantPrice(selectedVariant);
  selectDefaultVariant(product)
    attachOnVariantSelectListeners(product);
    updateCartTabButton();
    bindEventListeners();
  //_g_product = product;
  //print_gProd();
  });

  /* Generate DOM elements for variant selectors
  ============================================================ */
  function generateSelectors(product) {
    var elements = product.options.map(function (option) {
      var optionsHtml = option.values.map(function (value) {
        return '<option value="' + value + '">' + value + '</option>';
      });

      return '<div class="shopify-select">\
                <select class="select" name="' + option.name + '">' + optionsHtml + '</select>\
                <svg class="shopify-select-icon" viewBox="0 0 24 24"><path d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"></path></svg>\
              </div>'
    });

    return elements;
  }

  /* Bind Event Listeners
  ============================================================ */
  function bindEventListeners() {
    /* cart close button listener */
    $('.cart .btn--close').on('click', closeCart);

    /* click away listener to close cart */
    $(document).on('click', function (evt) {
      if ((!$(evt.target).closest('.cart').length) && (!$(evt.target).closest('.js-prevent-cart-listener').length)) {
        closeCart();
      }
    });

    /* escape key handler */
    var ESCAPE_KEYCODE = 27;
    $(document).on('keydown', function (evt) {
      if (evt.which === ESCAPE_KEYCODE) {
        if (previousFocusItem) {
          $(previousFocusItem).focus();
          previousFocusItem = ''
        }
        closeCart();
      }
    });

    first_pairs = [1326126825495, 427432214567, 427432509479, 427432280103, 427432706087, 427432116263, 427432083495, 427431559207, 427431165991, 427430772775, 436212400167, 427430740007, 427432542247, 427431886887, 427431460903, 427432411175, 427431755815, 427431690279, 427431297063, 427430903847, 427429953575, 427431952423, 427432017959, 427431526439, 427430969383];
    first_pairs = [1558055616535, 1558054240279, 1558054830103, 1558058860567, 1558053486615, 1558052438039, 1558046801943, 1558042705943, 1558039920663, 1558038151191, 1558050013207, 1558051094551, 1558045360151, 1558041690135, 1558039330839, 1558058237975, 1558049357847, 1558044573719, 1558056730647, 1558048571415, 1558047784983, 1558043623447, 1558040707095, 1558038708247, 3492342202391, 3492357734423, 3492355801111, 3492359831575, 1407716360215, 1401237340183, 1368521736215, 1385287483415, 1365766307863, 1413647302679, 1413647204375, 1413647007767, 1424182345751, 1505785544727, 1407716458519, 1392780574743, 1385287974935, 1385287450647, 1377391378455, 4390576324672, 4398728183872, 4399540174912, 4430094729280, 4442452164672, 4452719951936, 6229897281688, 6229897543832, 6229897871512, 6280713240728, 6280712945816, 6280712585368, 6227699564696, 6227699826840, 6208746160280, 6280709275800, 6280708915352, 6280708751512, 6947779543192, 6957829292184, 6951838843032, 6957830701208, 6957828571288, 6966098886808, 6957732364440, 6957831291032, 6957828833432, 6951697678488, 6951703216280, 6957828341912];
    first_pairs = [1558055616535, 1558054240279, 1558054830103, 1558058860567, 1558053486615, 1558052438039, 1558046801943, 1558042705943, 1558039920663, 1558038151191, 1558050013207, 1558051094551, 1558045360151, 1558041690135, 1558039330839, 1558058237975, 1558049357847, 1558044573719, 1558056730647, 1558048571415, 1558047784983, 1558043623447, 1558040707095, 1558038708247, 3492342202391, 3492357734423, 3492355801111, 3492359831575, 1407716360215, 1401237340183, 1368521736215, 1385287483415, 1365766307863, 1413647302679, 1413647204375, 1413647007767, 1424182345751, 1505785544727, 1407716458519, 1392780574743, 1385287974935, 1385287450647, 1377391378455, 4390576324672, 4398728183872, 4399540174912, 4430094729280, 4442452164672, 4452719951936, 6229897281688, 6229897543832, 6229897871512, 6280713240728, 6280712945816, 6280712585368, 6227699564696, 6227699826840, 6208746160280, 6280709275800, 6280708915352, 6280708751512, 6947779543192, 6957829292184, 6951838843032, 6957830701208, 6957828571288, 6966098886808, 6957732364440, 6957831291032, 6957828833432, 6951697678488, 6951703216280, 6957828341912, 7294868979864, 1558057582615, 7294779523224, 7294778572952, 7292380512408, 7292379431064, 7292378284184, 7292377202840, 7292034056344, 7292054864024, 7292064432280, 7292060500120, 7292055945368, 7292073509016, 7411180601496, 7318231974040, 7318232203416, 7313315299480, 7294784110744, 7463255081112, 7292192030872, 7292158410904, 3492338860055, 7292164047000, 7292163195032, 7292190523544, 7292159033496, 7463255834776, 7463255474328, 7463256391832, 7292164735128, 7292160147608, 7292093497496, 7292127641752, 7292112634008, 7292112208024, 7292126396568, 7292111290520, 7292111749272, 7292110831768, 7292094611608, 7292128133272, 7292115615896, 7292115091608, 7292126822552, 7292114010264, 7292114632856, 7292113027224, 7292095922328, 7292128559256, 7292118696088, 7292118106264, 7292192784536, 7292116598936, 7292117450904, 7292116205720, 7639780458648, 7639780491416, 7639782719640, 7639782523032, 7639780753560, 7639780720792, 7639780622488, 7639780556952, 7639780884632, 7639782883480, 7639780163736, 7639780819096, 7639782391960, 7639782326424, 7639781408920, 7639780098200, 7639782457496, 7639780229272, 7639780262040, 7639780294808, 7639780393112];
    match_pairs = [427430510631];
    match_pairs = [1558039035927];

    /* check if needs pairing */
    function checkIfPairingOk() {
      var fp_present = false;	// it was not found in cart
      var mp_present = false;	// it was not found in cart
      var fp_qty = 0;
      var mp_qty = 0;
      /*first_pairs 	= [10309467784];
      match_pairs 	= [20309467784];*/
      console.log('*************************************************************CART LINE ITEMS');
      console.log(cart.lineItems);
      for (cartProduct in cart.lineItems) {
        console.log('********************************ENTERING FOREACH')
        console.log(first_pairs)
        console.log(first_pairs.indexOf(cart.lineItems[cartProduct].product_id))
        if (first_pairs.indexOf(cart.lineItems[cartProduct].product_id) !== -1) {
          console.log('********************************ENTERING FIRST')
          fp_present = true;
          fp_qty += cart.lineItems[cartProduct].quantity;
        }
        if (match_pairs.indexOf(cart.lineItems[cartProduct].product_id) !== -1) {
          mp_present = true;
          mp_qty += cart.lineItems[cartProduct].quantity;
        }
      }
      if (fp_present) {
        if (fp_qty == mp_qty) {
          return true;
        }
        // the match is not present
        _element = '<div class="modal fade" id="msgBxCheckout" role="dialog" style="z-index: 9999999;">';
        _element += '<div class="modal-dialog modal-lg">';
        _element += '<div class="modal-content">';
        _element += '<div class="modal-header">'
        _element += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        _element += '<h4 class="modal-title">Attention:</h4>'
        _element += '</div><div class="modal-body" style="text-align: center;"><p>You are ordering powered cubicles. You need to purchase a <a href="/shop/modular-office-furniture/modular-furniture-powered/commercial-system-furniture-power-infeed" target="_blank">power infeed</a> for each single or multipack in your shopping cart.</p></div>';
        _element += '<div class="modal-footer">'
        _element += '<button type="button" class="btn btn-default" data-dismiss="modal">Got it</button>';
        _element += '</div>';
        _element += '</div>';
        _element += '</div>';
        _element += '</div>';
        $('body').append(_element);
        $('#msgBxCheckout').modal('toggle')
        return false;
      }
      // there is not product that needs to be matched return true
      return true;

    }

    /* checkout button click listener */
    $('.btn--cart-checkout').on('click', function () {
      if (!checkIfPairingOk()) return;

      if ($('#cart-agreement').is(':checked')) {

        $.ajax({
          type: 'post',
          url: base_url + 'home/set_checkout_cookie',
          cache: false,
          success: function (html) {
            console.log(html);
          }
        });

        window.open(cart.checkoutUrl, '_blank');

      }
      else {
        _element = '<div class="modal fade" id="msgBxCheckout" role="dialog" style="z-index: 9999999;">';
        _element += '<div class="modal-dialog modal-lg">';
        _element += '<div class="modal-content">';
        _element += '<div class="modal-header">'
        _element += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
        _element += '<h4 class="modal-title">Attention:</h4>'
        _element += '</div><div class="modal-body" style="text-align: center;"><p>Before you can checkout, please confirm you agree to our terms and policies by checking the box. Thank you!</p></div>';
        _element += '<div class="modal-footer">'
        _element += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        _element += '</div>';
        _element += '</div>';
        _element += '</div>';
        _element += '</div>';
        $('body').append(_element);
        $('#msgBxCheckout').modal('toggle')
        // alert('You need to accept our Terms of Service and Return Policy before you can proceed to checkout!');
      }
    });
    $(document).on('click', '#msgBxCheckout button', function () {
      $('#msgBxCheckout').remove();
      $('.modal-backdrop.fade').remove();
    });

    /* buy button click listener */
    $('.buy-button').on('click', buyButtonClickHandler);
    $('#add-to-cart').on('click', buyButtonClickHandler);
    $('#clear-all').on('click', function () {
      /*
      not compatible with IE
      cart.clearLineItems().then(cart => {
      });*/
      cart.clearLineItems().then(function (cart) {
        return {};
      });
      renderCartItems();
      updateCartTabButton();
    });

    /* increment quantity click listener */
    $('.cart').on('click', '.quantity-increment', function () {
      var variantId = $(this).data('variant-id');
      console.log(variantId);
      incrementQuantity(variantId);
    });

    /* decrement quantity click listener */
    $('.cart').on('click', '.quantity-decrement', function () {
      var variantId = $(this).data('variant-id');
      decrementQuantity(variantId);
    });

    /* update quantity field listener */
    $('.cart').on('keyup', '.cart-item__quantity', debounce(fieldQuantityHandler, 250));

    /* cart tab click listener */
    $('.btn--cart-tab').click(function () {
      setPreviousFocusItem(this);
      openCart();
    });
  }

  // this method is called only if product isn't shopifyible
  function attachOnVariantSelectListenersNoProduct() {
    $('.variant-wrapper').on('change', 'select', function (event) {
      _selected_options = new Array;
      _selected_variant_id = "";
      $('.variant-wrapper select').each(function () {
        entry = { option_id: $(this).find(":selected").attr('id'), name: $(this).find(":selected").attr('name'), value: $(this).find(":selected").attr('value') };
        _selected_options.push(entry);
      });
      $.ajax({
        type: 'post',
        url: base_url + 'shop/retreiveImage',
        data: {
          'attributes': _selected_options,
        },
        cache: false,
        success: function (html) {
          console.log(html)
          console.log($(_selected_variant_id).length)
          _selected_variant_id = html;
          _o_index = $('.owl-item').index($(_selected_variant_id).closest('.owl-item'));
          if (_o_index != -1) {
            $('.owl-wrapper').trigger('owl.goTo', _o_index);
            $('.fluid-image-container .img-responsive').attr('src', $(_selected_variant_id + ' > img').attr('src'));
            $('.fluid-image-container .img-responsive').attr('data-zoom-image', $(_selected_variant_id + ' > img').attr('src'));
            $(".fluid-image-container .img-responsive").data('zoom-image', $(_selected_variant_id + ' > img').attr('src')).elevateZoom({ tint: true, tintColour: '#797979', tintOpacity: 0.5 });
          }

        }
      });

    });
  }

  /* Variant option change handler
  ============================================================ */
  function attachOnVariantSelectListeners(product) {
    console.log('VARIANT SELECTED!');
    //$('.variant-selectors').on('change', 'select', function(event) {
    $('.variant-wrapper').on('change', 'select', function (event) {
      var $element = $(event.target);
      var name = $element.attr('name');
      var value = $element.val();
      product.options.filter(function (option) {
        return option.name === name;
      })[0].selected = value;

      var selectedVariant = product.selectedVariant;
      var selectedVariantImage = product.selectedVariantImage;
      // go over each option presented and get the selected option id's:
      _selected_options = new Array;
      _selected_variant_id = "";
      $('.variant-wrapper select').each(function () {
        entry = { option_id: parseInt($(this).find(":selected").attr('id')), name: $(this).find(":selected").attr('name'), value: $(this).find(":selected").attr('value') };
        _selected_options.push(entry);
      });
      $.ajax({
        type: 'post',
        url: base_url + 'shop/retreiveImage',
        data: {
          // 'attributes': _selected_options,
          'attributes': JSON.stringify(_selected_options),
        },
        cache: false,
        success: function (html) {
          if (typeof (html) != undefined && html != '') {
            _selected_variant_id = html;
            _selected_variant_orig_id = (html.replace('.vi', '') * 1);
            selectedVariantId = _selected_variant_orig_id;
            if (variantQtys[_selected_variant_orig_id] == 0) {
              $('.purchaseable').hide();
              $('.notifyme').show();
              $('.notify-me-fields').hide(); // hide the form in any case
            } else {
              $('.purchaseable').show();
              $('.notifyme').hide();
              $('.notify-me-fields').hide(); // hide the form in any case
            }

            // _o_index = $('.owl-item').index($(_selected_variant_id).closest('.owl-item'));
            // if(_o_index!=-1)	{
            //   $('.owl-wrapper').trigger('owl.goTo', _o_index);
            $('.fluid-image-container .img-responsive').attr('src', $(_selected_variant_id + ' > img').attr('src'));
            //   $('.fluid-image-container .img-responsive').attr('data-zoom-image', $(_selected_variant_id+' > img').attr('src'));
            //   $(".fluid-image-container .img-responsive").data('zoom-image', $(_selected_variant_id+' > img').attr('src')).elevateZoom({tint:true, tintColour:'#797979', tintOpacity:0.5});
            // }
          }
          else {
            // fail silently
            console.log('failing silently!');
            return;
          }
        }
      });

      updateProductTitle(product.title);
      updateVariantImage(selectedVariantImage);
      updateVariantTitle(selectedVariant);
      updateVariantPrice(selectedVariant);
    });
  }

  /*function attachOnVariantSelectListeners(product) {
    $('.variant-wrapper').on('change', 'select', function(event) {
    alert('change variant');
      var $element = $(event.target);
      var name = 'logo size';
      var value = 'big';
      product.options.filter(function(option) {
        return option.name === name;
      })[0].selected = value;

      var selectedVariant = product.selectedVariant;
      var selectedVariantImage = product.selectedVariantImage;
      updateProductTitle(product.title);
      updateVariantImage(selectedVariantImage);
      updateVariantTitle(selectedVariant);
      updateVariantPrice(selectedVariant);
    });
  }*/

  function selectDefaultVariant(product) {
    $('.variant-wrapper select').each(function () {
      var name = $(this).attr('name');
      var value = $(this).val();
      product.options.filter(function (option) {
        return option.name === name;
      })[0].selected = value;


    });
    var selectedVariant = product.selectedVariant;
    _o_index = $('.owl-item').index($('#vi' + selectedVariant.id).closest('.owl-item'));
    if (_o_index != -1) {	//if _o_index==-1 the select variant has no image associated with it
      $('.owl-wrapper').trigger('owl.goTo', _o_index);
      $('.fluid-image-container .img-responsive').attr('src', $('#vi' + selectedVariant.id + ' > img').attr('src'));
      $('.fluid-image-container .img-responsive').attr('data-zoom-image', $('#vi' + selectedVariant.id + ' > img').attr('src'));
      $(".fluid-image-container .img-responsive").data('zoom-image', $('#vi' + selectedVariant.id + ' > img').attr('src')).elevateZoom({ tint: true, tintColour: '#797979', tintOpacity: 0.5 });
    }
    var selectedVariantImage = product.selectedVariantImage;
    updateProductTitle(product.title);
    updateVariantImage(selectedVariantImage);
    updateVariantTitle(selectedVariant);
    updateVariantPrice(selectedVariant);
  }

  /* Update product title
  ============================================================ */
  function updateProductTitle(title) {
    /*$('#buy-button-1 .product-title').text(title);*/
    $('.product-title').text(title);
  }

  /* Update product image based on selected variant
  ============================================================ */
  function updateVariantImage(image) {
    var src = (image) ? image.src : ShopifyBuy.NO_IMAGE_URI;

    $('#buy-button-1 .variant-image').attr('src', src);
  }

  /* Update product variant title based on selected variant
  ============================================================ */
  function updateVariantTitle(variant) {
    /*$('#buy-button-1 .variant-title').text(variant.title);*/
    // $('.variant-title').text(variant.title);
    $('.variant-title').text((variant.title == "Default Title") ? "" : variant.title);
  }

  /* Update product variant price based on selected variant
  ============================================================ */
  function updateVariantPrice(variant) {
    /*$('#buy-button-1 .variant-price').text('$' + variant.price);*/
    $('.variant-price').text('$' + variant.price);
  }

  /* Attach and control listeners onto buy button
  ============================================================ */
  function buyButtonClickHandler(evt) {
    evt.preventDefault();
    //var id = product.selectedVariant.id;
    //alert(product.selectedVariant.id);
    var id = product.selectedVariant.id;
    var quantity;
    var cartLineItem = findCartItemByVariantId(id);

    quantity = cartLineItem ? cartLineItem.quantity + parseInt($('#quantity').val()) : $('#quantity').val();

    addOrUpdateVariant(product.selectedVariant, quantity);
    console.log('************************** CARTLINE ON ADD')
    console.log(product)
    console.log(cartLineItem)
    // if(!checkIfPairingProductAdded(cartLineItem.product_id)) {
    if (!checkIfPairingProductAdded(product.id)) {
      showInfoBar();
    }
    setPreviousFocusItem(evt.target);
    $('#checkout').focus();

  }

  /* check pairing product is added to cart */
  function checkIfPairingProductAdded(product_id) {
    var fp_present = false;	// it was not found in cart

    if (first_pairs.indexOf(product_id) !== -1) {
      fp_present = true;
    }
    if (fp_present) {

      // the match is not present
      _element = '<div class="modal fade" id="msgBxCheckout" role="dialog" style="z-index: 9999999;">';
      _element += '<div class="modal-dialog modal-lg">';
      _element += '<div class="modal-content">';
      _element += '<div class="modal-header">'
      _element += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
      _element += '<h4 class="modal-title">Attention:</h4>'
      _element += '</div><div class="modal-body" style="text-align: center;"><p>Item was successfully added to cart. We\'d like to remind you that you need to purchase a <a href="/shop/modular-office-furniture/modular-furniture-powered/commercial-system-furniture-power-infeed" target="_blank">power infeed</a> as a separate product (one infeed for each single or multipack) and provide your own electrician and IT personnel to connect the furniture system wiring into your building\'s power or data grid.</p></div>';
      _element += '<div class="modal-footer">'
      _element += '<button type="button" class="btn btn-default" data-dismiss="modal">Got it</button>';
      _element += '</div>';
      _element += '</div>';
      _element += '</div>';
      _element += '</div>';
      $('body').append(_element);
      $('#msgBxCheckout').modal('toggle')
      return true;
    }
    // there is not product that needs to be matched return true
    return false;

  }

  /*
  ============================================================ */
  function showInfoBar() {
    $('.add-to-cart-info').fadeIn(400, function () {
      setTimeout(function () {
        $('.add-to-cart-info').fadeOut();
      }, 3000);
    });

  }
  $(document).on('click', '.close-add-to-cart-info', function () {
    $('.add-to-cart-info').fadeOut();
  });

  /* Update product variant quantity in cart
  ============================================================ */
  function updateQuantity(fn, variantId) {
    console.log(product);
    if (typeof (product) != "undefined") {
      var variant = product.variants.filter(function (variant) {
        return (variant.id === variantId);
      })[0];
    }

    var quantity;
    //var cartLineItem = findCartItemByVariantId(variant.id);
    var cartLineItem = findCartItemByVariantId(variantId);
    if (cartLineItem) {
      quantity = fn(cartLineItem.quantity);
      updateVariantInCart(cartLineItem, quantity);
    }
  }

  /* Decrease quantity amount by 1
  ============================================================ */
  function decrementQuantity(variantId) {
    updateQuantity(function (quantity) {
      return quantity - 1;
    }, variantId);
  }

  /* Increase quantity amount by 1
  ============================================================ */
  function incrementQuantity(variantId) {
    updateQuantity(function (quantity) {
      return quantity + 1;
    }, variantId);
  }

  /* Update product variant quantity in cart through input field
  ============================================================ */
  function fieldQuantityHandler(evt) {
    var variantId = parseInt($(this).closest('.cart-item').attr('data-variant-id'), 10);
    console.log(variantId)
    console.log(product)
    if (typeof (product) != "undefined") {
      var variant = product.variants.filter(function (variant) {
        return (variant.id === variantId);
      })[0];
    }

    // var cartLineItem = findCartItemByVariantId(variant.id);
    var cartLineItem = findCartItemByVariantId(variantId);
    var quantity = evt.target.value;
    if (cartLineItem) {
      updateVariantInCart(cartLineItem, quantity);
    }
  }

  /* Debounce taken from _.js
  ============================================================ */
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    }
  }

  /* Custom view cart button
  ============================================================ */
  $(document).on('click', '#view-cart, #info-view-cart', function (e) {
    e.preventDefault();
    if (!$('.cart').hasClass('js-active')) {
      /*setPreviousFocusItem($('.btn--cart-tab'));
      openCart();*/
      $('.btn--cart-tab').removeClass('js-active')
      alert($('.cart').length);
      $('.cart').addClass('js-active');
    }
    else {
      closeCart();
    }
  });

  /* Open Cart
  ============================================================ */
  function openCart() {
    $('.cart').addClass('js-active');
  }

  /* Close Cart
  ============================================================ */
  function closeCart() {
    $('.cart').removeClass('js-active');
    $('.overlay').removeClass('js-active');
  }

  /* Find Cart Line Item By Variant Id
  ============================================================ */
  function findCartItemByVariantId(variantId) {
    return cart.lineItems.filter(function (item) {
      return (item.variant_id === variantId);
    })[0];
  }

  /* Determine action for variant adding/updating/removing
  ============================================================ */
  function addOrUpdateVariant(variant, quantity) {
    openCart();
    var cartLineItem = findCartItemByVariantId(variant.id);

    if (cartLineItem) {
      updateVariantInCart(cartLineItem, quantity);
    } else {
      addVariantToCart(variant, quantity);
    }

    updateCartTabButton();
    updateCartLinks();

  }

  /* Update details for item already in cart. Remove if necessary
  ============================================================ */
  function updateVariantInCart(cartLineItem, quantity) {
    var variantId = cartLineItem.variant_id;
    var cartLength = cart.lineItems.length;
    cart.updateLineItem(cartLineItem.id, quantity).then(function (updatedCart) {
      var $cartItem = $('.cart').find('.cart-item[data-variant-id="' + variantId + '"]');
      if (updatedCart.lineItems.length >= cartLength) {
        $cartItem.find('.cart-item__quantity').val(cartLineItem.quantity);
        $cartItem.find('.cart-item__price').text(formatAsMoney(cartLineItem.line_price));
      } else {
        $cartItem.addClass('js-hidden').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
          $cartItem.remove();
        });
      }

      updateCartTabButton();
      updateTotalCartPricing();
      if (updatedCart.lineItems.length < 1) {
        closeCart();
      }
    }).catch(function (errors) {
      console.log('Fail');
      console.error(errors);
    });
  }

  /* Add 'quantity' amount of product 'variant' to cart
  ============================================================ */
  function addVariantToCart(variant, quantity) {
    openCart();

    cart.createLineItemsFromVariants({ variant: variant, quantity: quantity }).then(function () {
      var cartItem = cart.lineItems.filter(function (item) {
        return (item.variant_id === variant.id);
      })[0];
      var $cartItem = renderCartItem(cartItem);
      var $cartItemContainer = $('.cart-item-container');
      $cartItemContainer.append($cartItem);
      setTimeout(function () {
        $cartItemContainer.find('.js-hidden').removeClass('js-hidden');
      }, 0)

    }).catch(function (errors) {
      console.log('Fail');
      console.error(errors);
    });

    updateTotalCartPricing();
    updateCartTabButton();
    updateCartLinks();
  }

  /* return the lins for products:
  ============================================================ */
  function updateCartLinks() {
    _arr = new Array;
    $('.cart-item__title').each(function () {
      //console.log('found one');
      //console.log($(this).find('a').attr('href'));
      //_arr.push($(this).find('a').attr('href'));
      _arr.push($(this).find('a').text());
    });

    console.log("url: " + base_url + 'shop/retreiveLinks');
    console.log(_arr);

    $.ajax({
      type: 'post',
      url: base_url + 'shop/retreiveLinks',
      data: {
        'attributes': _arr,
      },
      cache: false,
      success: function (html) {
        /*console.log(html);
        console.log('json:');*/
        links = $.parseJSON(html);
        $('.cart-item__title').each(function (index) {
          //console.log('found one');
          //console.log($(this).find('a').attr('href'));
          //_arr.push($(this).find('a').attr('href'));
          //console.log(index);
          _arr.push($(this).find('a').attr('href', links[index]));
        });
      }
    });
  }

  /* Return required markup for single item rendering
  ============================================================ */
  function renderCartItem(lineItem) {
    var lineItemEmptyTemplate = $('#CartItemTemplate').html();
    var $lineItemTemplate = $(lineItemEmptyTemplate);
    if (typeof (lineItem) !== "undefined" && lineItem != "") {
      if (lineItem.image != null) {
        var itemImage = lineItem.image.src;
      }
      else {
        var itemImage = "/shop/images/no-product-image.png";
      }
    }
    /*console.log("fetching ...");
    console.log(lineItem);
    /*client.fetchProduct(lineItem.id).then(function (fetchedProduct) {
      console.log(fetchedProduct);
      });* /
    console.log('fetching ,,,');
    var _my_handle;
  client.fetchProduct(lineItem.id)
    .then(function (product) {
      _my_handle = product.attrs.handle;
      console.log(_my_handle);
    })
    .catch(function () {
      console.log('Request failed');
    });*/
    $lineItemTemplate.attr('data-variant-id', lineItem.variant_id);
    $lineItemTemplate.addClass('js-hidden');
    $lineItemTemplate.find('.cart-item__img').css('background-image', 'url(' + itemImage + ')');
    //$lineItemTemplate.find('.cart-item__title').text(lineItem.title);
    $lineItemTemplate.find('.cart-item__title').html("<a href='/shop/product/" + lineItem.variant_id + "'>" + lineItem.title + "</a>");
    $lineItemTemplate.find('.cart-item__variant-title').text((lineItem.variant_title == "Default Title") ? "" : lineItem.variant_title);
    $lineItemTemplate.find('.cart-item__price').text(formatAsMoney(lineItem.line_price));
    $lineItemTemplate.find('.cart-item__quantity').attr('value', lineItem.quantity);
    $lineItemTemplate.find('.quantity-decrement').attr('data-variant-id', lineItem.variant_id);
    $lineItemTemplate.find('.quantity-increment').attr('data-variant-id', lineItem.variant_id);

    return $lineItemTemplate;
  }

  /* Render the line items currently in the cart
  ============================================================ */
  function renderCartItems() {
    console.log('attempting to render cart items!');
    var $cartItemContainer = $('.cart-item-container');
    $cartItemContainer.empty();
    var lineItemEmptyTemplate = $('#CartItemTemplate').html();
    var $cartLineItems = cart.lineItems.map(function (lineItem, index) {
      return renderCartItem(lineItem);
    });
    $cartItemContainer.append($cartLineItems);

    setTimeout(function () {
      $cartItemContainer.find('.js-hidden').removeClass('js-hidden');
    }, 0)
    updateTotalCartPricing();
  }

  /* Update Total Cart Pricing
  ============================================================ */
  function updateTotalCartPricing() {
    $('.cart .pricing').text(formatAsMoney(cart.subtotal));
  }

  /* Format amount as currency
  ============================================================ */
  function formatAsMoney(amount, currency, thousandSeparator, decimalSeparator, localeDecimalSeparator) {
    currency = currency || '$';
    thousandSeparator = thousandSeparator || ',';
    decimalSeparator = decimalSeparator || '.';
    localeDecimalSeparator = localeDecimalSeparator || '.';
    var regex = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');

    return currency + parseFloat(amount, 10).toFixed(2)
      .replace(localeDecimalSeparator, decimalSeparator)
      .replace(regex, '$1' + thousandSeparator)
      .toString();
  }

  /* Update cart tab button
  ============================================================ */
  function updateCartTabButton() {

    if (cart.lineItems.length > 0) {
      $('.btn--cart-tab .btn__counter').html(cart.lineItemCount);
      $('.btn--cart-tab').addClass('js-active');
    } else {
      $('.btn--cart-tab').removeClass('js-active');
      $('.cart').removeClass('js-active');
    }

  }

  /* Set previously focused item for escape handler
  ============================================================ */
  function setPreviousFocusItem(item) {
    previousFocusItem = item;
  }

  $(window).focus(function () {

    if (localStorage.getItem('lastCartId') && typeof client != 'undefined') {
      client.fetchCart(localStorage.getItem('lastCartId')).then(function (remoteCart) {
        cart = remoteCart;
        cartLineItemCount = cart.lineItems.length;
        console.log(cartLineItemCount);
        renderCartItems();
        updateCartTabButton();
      });
    } else if (typeof client != 'undefined') {
      client.createCart().then(function (newCart) {
        cart = newCart;
        localStorage.setItem('lastCartId', cart.id);
        cartLineItemCount = 0;
      });
    }
    updateCartLinks();


    //update cart button:
    /*if (cart.lineItems.length > 0) {
      $('.btn--cart-tab .btn__counter').html(cart.lineItemCount);
      $('.btn--cart-tab').addClass('js-active');
    } else {
      $('.btn--cart-tab').removeClass('js-active');
      $('.cart').removeClass('js-active');
    }*/

    console.log('welcome (back)');
  });

  $(document).on('click', '#cart-agreement', function () {

  });

});