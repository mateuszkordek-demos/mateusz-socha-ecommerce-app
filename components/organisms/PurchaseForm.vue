<template lang="pug">
    .purchase-form
        v-card(
            color="#f8f8f8"
            :class="phone?'pt-0 pb-2 px-3':tablet?'py-1 px-4':'py-3 px-6'"
            flat
        )
            v-form(
                ref="purchaseForm"
                v-model="valid"
                lazy-validation
            )
                v-row.justify-center
                    v-col(
                        :cols="phone ? 12 : laptop ? 12 : 12"
                    )
                        h3.mb-5 Dane kontaktowe
                        v-row
                            v-col.py-0(
                                cols="12"
                            )
                                v-text-field(
                                    v-model="formData.billing.firstName"
                                    :rules="textRules"
                                    label="Imię"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                            v-col.py-0(
                                cols="12"
                            )
                                v-text-field(
                                    v-model="formData.billing.lastName"
                                    :rules="textRules"
                                    label="Nazwisko"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                        v-row
                            v-col.py-0(
                                :cols="phone ? 12 : 6"
                            )
                                v-text-field(
                                    v-model="formData.billing.phone"
                                    :rules="phoneNumberRules"
                                    label="Numer telefonu"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                            v-col.py-0(
                                :cols="phone ? 12 : 6"
                            )
                                v-text-field(
                                    v-model="formData.billing.email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                            v-col.py-0(
                                :cols="phone ? 12 : 12"
                            )
                                v-text-field(
                                    v-model="formData.billing.street"
                                    :rules="textRules"
                                    label="Ulica i numer"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                            v-col.py-0(
                                :cols="phone ? 12 : 4"
                            )
                                v-text-field(
                                    v-model="formData.billing.postcode"
                                    :rules="postalCodeRules"
                                    label="Kod pocztowy"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                            v-col.py-0(
                                :cols="phone ? 12 : 8"
                            )
                                v-text-field(
                                    v-model="formData.billing.city"
                                    :rules="textRules"
                                    label="Miasto"
                                    required
                                    outlined
                                    dense
                                    validate-on-blur
                                )

                        //- different shipping address
                        v-checkbox.mt-0(
                            v-model="diffShipping"
                            label="Wysłać na inny adres?"
                        )

                        div(
                            v-if="diffShipping == true"
                        )

                            h3.mb-5 Adres wysyłki

                            v-row
                                v-col.py-0(
                                    cols="12"
                                )
                                    v-text-field(
                                        v-model="formData.shipping.firstName"
                                        :rules="textRules"
                                        label="Imię"
                                        required
                                        outlined
                                        dense
                                        validate-on-blur
                                    )

                                v-col.py-0(
                                    cols="12"
                                )
                                    v-text-field(
                                        v-model="formData.shipping.lastName"
                                        :rules="textRules"
                                        label="Nazwisko"
                                        required
                                        outlined
                                        dense
                                        validate-on-blur
                                    )

                            v-row(
                                :class="phone ? 'mb-1' : 'mb-3'"
                            )

                                v-col.py-0(
                                    :cols="phone ? 12 : 12"
                                )
                                    v-text-field(
                                        v-model="formData.shipping.street"
                                        :rules="textRules"
                                        label="Ulica i numer"
                                        required
                                        outlined
                                        dense
                                        validate-on-blur
                                    )

                                v-col.py-0(
                                    :cols="phone ? 12 : 4"
                                )
                                    v-text-field(
                                        v-model="formData.shipping.postcode"
                                        :rules="postalCodeRules"
                                        label="Kod pocztowy"
                                        required
                                        outlined
                                        dense
                                        validate-on-blur
                                    )

                                v-col.py-0(
                                    :cols="phone ? 12 : 8"
                                )
                                    v-text-field(
                                        v-model="formData.shipping.city"
                                        :rules="textRules"
                                        label="Miasto"
                                        required
                                        outlined
                                        dense
                                        validate-on-blur
                                    )

                        v-divider(
                            :class="phone ? 'mb-6 mt-2' : 'mb-6 mt-2'"
                        )


                        //- optional message
                        //- h3.mb-5 Masz jakieś pytania?

                        //- v-row
                        //-     v-col.py-0(
                        //-         cols="12"
                        //-     )
                        //-         v-textarea(
                        //-             v-model="msg"
                        //-             label="Uwagi do zamówienia"
                        //-             outlined
                        //-         )

                        //- v-divider(
                        //-     :class="phone ? 'mb-6 mt-2' : 'mb-6 mt-2'"
                        //- )

                        v-row.mb-4
                            v-col.py-0(
                                cols="12"
                            )
                                v-checkbox.mt-1(
                                    v-model="newsletter.optIn"
                                    required
                                )
                                    template(v-slot:label)
                                        .p Chcę wiedzieć co u Matiego – zapisz mnie na newsletter

                                //- div(
                                //-     v-if="newsletter.optIn"
                                //-     class="pl-8"
                                //- )
                                //-     p Wybierz województwa
                                //-     v-checkbox(
                                //-         v-for="(voiv, index) in getVoivodeships"
                                //-         :key="index"
                                //-         v-model="newsletter.voivodeship[voiv.slug]"
                                //-         color="secondary"
                                //-         dense
                                //-         hideDetails
                                //-     )
                                //-         template(v-slot:label)
                                //-             .p
                                //-                 span {{voiv.name}}

                                div(
                                    v-if="newsletter.optIn"
                                    class="mb-6"
                                    :class="!phone?'pl-8':''"
                                )
                                    p Chcesz wiedzieć w pierwszej kolejności o występach w twojej okolicy? Wybierz województwo!

                                    v-row
                                        v-col(
                                            cols="6"
                                            v-for="(voiv, index) in getVoivodeships"
                                            :key="index"
                                        )
                                            v-checkbox(
                                                v-model="newsletter.voivodeship[voiv.slug]"
                                                color="secondary"
                                                dense
                                                hideDetails
                                                class="pt-0 mt-0"
                                            )
                                                template(v-slot:label)
                                                    .p
                                                        span {{voiv.name}}



                                v-checkbox.mt-1(
                                    v-model="checkboxRodo"
                                    :rules="[v => !!v || 'To pole jest wymagane!']"
                                    required
                                )
                                    template(v-slot:label)
                                        .p
                                            span Twoje dane osobowe będą użyte do przetworzenia twojego zamówienia, obsługi twojej wizyty na naszej stronie oraz dla innych celów o których mówi nasz
                                            a(
                                                class="mx-1"
                                                href="/regulaminy/regulamin.pdf"
                                                @click="event=>event.stopPropagation()"
                                                target="_blank"
                                            ) regulamin
                                            span oraz
                                            a(
                                                class="ml-1"
                                                href="/regulaminy/polityka-prywatnosci.pdf"
                                                @click="event=>event.stopPropagation()"
                                                target="_blank"
                                            ) polityka prywatności
                                            span .


                        //- purchase button
                        v-btn.font-weight-bold.px-7(
                            :disabled="!valid"
                            @click="validate"
                            color="success"
                            depressed
                            rounded
                            width="100%"
                        ) Kupuję i płacę

        v-dialog(
            v-model="loading"
            width="300px"
            persistent
        )
            v-card(
                class="d-flex align-center justify-center flex-column pa-8"
            )
                v-progress-circular(
                    indeterminate
                    color="primary"
                    class="mb-4"
                )
                //- h4(
                //-     class="text-center"
                //- ) Proszę czekać.
                h4(
                    class="text-center"
                ) Za chwilę zostaniesz przekierowany do strony płatności.

        v-dialog(
            v-model="errorModal"
            width="350px"
        )
            v-card(
                class="d-flex align-center justify-center flex-column pa-8"
                style="position: relative"
            )
                h4(
                    class="text-center mb-2"
                ) Coś poszło nie tak.
                p(
                    class="text-center mb-1"
                ) Jeśli problem będzie nadal występował skontaktuj się z nami na:
                a(
                    href="mailto:sklep@mateuszsocha.com"
                    target="_blank"
                ) sklep@mateuszsocha.com

                v-icon(
                    style="position: absolute; right: 10px; top: 10px"
                    v-if="tablet"
                    @click="errorModal = false"
                ) close

</template>

<script>
import axios from "axios";

import { mapGetters, mapActions } from "vuex";

export default {
    name: "purchase-form",

    data() {
        return {
            valid: null,
            diffShipping: false,

            loading: false,
            errorModal: false,

            formData: {
                billing: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    phone: null,
                    street: null,
                    postcode: null,
                    city: null
                },
                shipping: {
                    firstName: null,
                    lastName: null,
                    street: null,
                    postcode: null,
                    city: null
                }
            },

            msg: null,
            checkboxRodo: null,

            newsletter: {
                optIn: false,
                voivodeship: {
                    dolnoslaskie: false,
                    kujawskopomorskie: false,
                    lubelskie: false,
                    lubuskie: false,
                    lodzkie: false,
                    malopolskie: false,
                    mazowieckie: false,
                    opolskie: false,
                    podkarpackie: false,
                    podlaskie: false,
                    pomorskie: false,
                    slaskie: false,
                    swietokrzyskie: false,
                    warminskomazurskie: false,
                    wielkopolskie: false,
                    zachodniopomorskie: false
                }
            },

            // rules
            textRules: [
                val => {
                    if (val) return true;
                    else return "Pole jest wymagane";
                }
            ],

            emailRules: [
                val => {
                    if (
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                            val
                        )
                    ) {
                        return true;
                    } else {
                        return "Podaj poprawny adres e-mail";
                    }
                }
            ],

            phoneNumberRules: [
                phone => !!phone || "To pole jest wymagane",
                phone =>
                    /^[\+\d]?(?:[\d-.\s()]*)$/.test(phone) ||
                    "Podaj poprawny numer telefonu"
            ],

            postalCodeRules: [
                val => {
                    if (/^[0-9]+(-[0-9]+)+$/.test(val)) {
                        return true;
                    } else {
                        return "Podaj poprawny kod pocztowy";
                    }
                }
            ],

            numberRules: [
                val => {
                    if (!Number.isInteger(Number(val))) {
                        return "Tylko cyfry";
                    } else if (!val) {
                        return "Pole jest wymagane";
                    } else {
                        return true;
                    }
                }
            ]
        };
    },

    computed: {
        ...mapGetters(["getVoivodeships"])
    },

    methods: {
        ...mapActions(["clearCart"]),
        createOrderObject() {
            let obj = {
                billing: this.formData.billing,
                redirect: {
                    //'https://mateuszsocha.com/dziekujemy'
                    url:
                        process.env.NUXT_ENV_MICRO === "prod"
                            ? "https://mateuszsocha.com/dziekujemy"
                            : "https://mateusz-socha-website-dev.enl-projects.com/dziekujemy"
                },
                lineItems: [],
                newsletter: this.newsletter
            };

            if (!!this.diffShipping) {
                obj.shipping = this.formData.shipping;
            } else {
                obj.shipping = {
                    firstName: this.formData.billing.firstName,
                    lastName: this.formData.billing.lastName,
                    street: this.formData.billing.street,
                    city: this.formData.billing.city,
                    postcode: this.formData.billing.postcode
                };
            }

            this.getProductsInCart.forEach(a => {
                let item = {};
                item.product_id = a.id;
                item.quantity = a.purchasedQuantity;

                // przypisuje id wybranego wariantu jesli jest to ubranie
                if (a.wear == true) {
                    let sizeObject = a.sizes.find(
                        b => b.size == a.purchasedSize
                    );
                    item.variation_id = sizeObject.variationId;
                }

                obj.lineItems.push(item);
            });

            // dodaje przesylke jako produkt
            let shipping = {};
            shipping.product_id = this.getSelectedShipping.id;
            shipping.quantity = 1;
            obj.lineItems.push(shipping);
            return obj;
        },

        async validate() {
            let valid = this.$refs.purchaseForm.validate();
            if (valid) {
                let objectToSend = this.createOrderObject();
                // console.log("Wysyłam zamówienie: ", objectToSend);

                try {
                    this.loading = true;
                    let res = await axios.post(
                        process.env.NUXT_ENV_MICRO === "prod"
                            ? "https://mateusz-socha-microservice-prod.enl-projects.com/orders"
                            : "https://mateusz-socha-microservice-dev.enl-projects.com/orders",
                        // 'https://mateusz-socha-microservice-prod.enl-projects.com/orders',
                        objectToSend
                    );
                    // console.log(res);

                    if (res.data.status != "success") {
                        throw new Error(error);
                    }

                    let redirectUri = res.data.data.redirectUri; // przy platnosci z payu

                    // let redirectUri =
                    //     process.env.NUXT_ENV_MICRO === "prod"
                    //         ? "https://mateuszsocha.com/dziekujemy"
                    //         : "https://mateusz-socha-website-dev.enl-projects.com/dziekujemy";

                    this.clearCart();
                    this.loading = false;
                    window.location = redirectUri;
                } catch (error) {
                    this.loading = false;
                    this.errorModal = true;
                }
            }
        }
    }
};
</script>
