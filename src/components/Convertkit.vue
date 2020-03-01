<template>
    <form action="https://app.convertkit.com/forms/1242139/subscriptions" class="seva-form formkit-form" method="post"
          data-sv-form="1242139" data-uid="526ac32e93" data-format="inline" data-version="5"
          data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}"
          min-width="400 500 600 700 800" style="background-color: rgb(255, 255, 255); border-radius: 10px;">
        <div data-style="full">
            <div data-element="column" class="formkit-column" style="background-color: rgb(249, 250, 251);">
                <div class="formkit-background" style="opacity: 0.3;"></div>
                <div class="formkit-header" data-element="header"
                     style="color: rgb(129, 63, 235); font-size: 20px; font-weight: 700;"><h1>Join the Newsletter</h1>
                </div>
                <div class="formkit-subheader" data-element="subheader"
                     style="color: rgb(12, 14, 31); font-size: 15px;"><p>While I get this blog up and running, join my
                    newsletter so that you will be notified once it goes up.</p>
                    <p>​</p></div>
                <div class="formkit-image relative"><img class="cursor-pointer focus:outline-blue "
                                                         src="https://embed.filekitcdn.com/e/2shxzJMYidUVt6Pby2SoNp/xATw4VKN5WUdYAK7SQvtzH"
                                                         alt="" style="max-width: 100%;"></div>
            </div>
            <div data-element="column" class="formkit-column">
                <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" class="seva-fields formkit-fields">
                    <div class="formkit-field"><input class="formkit-input" aria-label="First Name"
                                                      name="fields[first_name]" required="" placeholder="First Name"
                                                      type="text"
                                                      style="color: rgb(12, 14, 31); border-color: rgb(227, 227, 227); border-radius: 10px; font-weight: 400;">
                    </div>
                    <div class="formkit-field"><input class="formkit-input" name="email_address"
                                                      placeholder="Email Address" required="" type="email"
                                                      style="color: rgb(12, 14, 31); border-color: rgb(227, 227, 227); border-radius: 10px; font-weight: 400;">
                    </div>
                    <button data-element="submit" class="formkit-submit formkit-submit"
                            style="color: rgb(255, 255, 255); background-color: rgb(129, 63, 235); border-radius: 10px; font-weight: 700;">
                        <div class="formkit-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span>Subscribe</span></button>
                </div>
                <div class="formkit-guarantee" data-element="guarantee"
                     style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"><p>I respect your privacy.
                    Unsubscribe at any time.</p></div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Convertkit',
    };
</script>
