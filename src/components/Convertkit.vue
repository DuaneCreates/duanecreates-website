<template>
  <form
    action="https://app.convertkit.com/forms/1275644/subscriptions"
    class="seva-form formkit-form"
    method="post"
    data-sv-form="1275644"
    data-uid="d8f18be054"
    data-version="5"
    data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"scroll","scroll_percentage":"100","timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    min-width="400 500 600 700 800"
    style="background-color: rgb(255, 255, 255); border-radius: 10px;"
  >
    <div data-style="full">
      <div
        data-element="column"
        class="formkit-background"
        style='background-image: url("https://embed.filekitcdn.com/e/2shxzJMYidUVt6Pby2SoNp/aWX6AQmaekUjjebRHJFw2");'
      ></div>
      <div data-element="column" class="formkit-column">
        <div
          class="formkit-header"
          data-element="header"
          style="color: rgb(129, 63, 235); font-size: 23px; font-weight: 700;"
        >
          <h1>Join the Newsletter</h1>
        </div>
        <ul
          class="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        ></ul>
        <div data-element="fields" class="seva-fields formkit-fields">
          <div class="formkit-field">
            <input
              class="formkit-input"
              aria-label="Your first name"
              name="fields[first_name]"
              placeholder="Your first name"
              type="text"
              style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;"
            />
          </div>
          <div class="formkit-field">
            <input
              class="formkit-input"
              name="email_address"
              placeholder="Your email address"
              required=""
              type="email"
              style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;"
            />
          </div>
          <button
            data-element="submit"
            class="formkit-submit formkit-submit"
            style="color: rgb(255, 255, 255); background-color: rgb(129, 63, 235); border-radius: 3px; font-weight: 700;"
          >
            <div class="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div
          class="formkit-disclaimer"
          data-element="disclaimer"
          style="color: rgb(139, 139, 139); font-size: 13px;"
        >
          <p>I respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Convertkit',
};
</script>
