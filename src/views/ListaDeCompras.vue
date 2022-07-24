 <template>
  <div class="mb-4">
    <va-card style="padding: 0.75rem">
      <va-card-title style="padding: 0.25rem">Adicionar item à lista</va-card-title>
      <div class="row">
        <div class="flex align-self--center" style="flex-grow:1">
          <div>
            <va-input
              v-model="nomeItem"
              label="Nome"
              placeholder="Nome"
              class="mr-1"
              outline
            />
          </div>
        </div>
        <div class="flex align-self--center">
          <div class="row justify--end">
            <div class="flex" style="flex-grow:1">
              <va-input
                v-model="valorItem"
                label="Preço Unit."
                placeholder="0.00"
                outline
                :mask="{
                  numeral: true,
                  numeralDecimalScale: 2,
                  numeralPositiveOnly: true
                }"
              />
            </div>
            <div class="flex">
              <va-button 
                icon="add"
                :rounded="false"
                class="ml-1"
                color="primary"
              />
            </div>

          </div>
            
            
        </div>
      </div>
    </va-card>
  </div>

  <div style="margin:10px">
    <va-card stripe :stripe-color="cardStripeColor" style="padding: 0.75rem 0.5rem 0.5rem 0.5rem;">
      <div class="row">
        <div class="flex align-self--center" style="flex-grow:1">
          <div>
            <va-checkbox 
              v-model="adicionado" 
              color="success"
              label="Café" 
            />
          </div>
        </div>
        <div class="flex align-self--center">
          <div class="row justify--end">
            <div class="flex">
              <va-counter
                v-model="qtd"
                outline
                margins="0px"
                width="110px"
                :min="1"
              />
            </div>
            <div class="flex">
              <va-button 
                icon="delete"
                :rounded="false"
                class="ml-1"
                color="danger"
              />
            </div>

          </div>
            
            
        </div>
      </div>
    </va-card>
  </div>
</template>

<script>
import { VaNavbar, VaCard, VaCounter, VaCheckbox, VaCardTitle, VaInput } from 'vuestic-ui';

export default {
  components: {
    VaNavbar,
    VaCard,
    VaCounter,
    VaCheckbox,
    VaCardTitle,
    VaInput
  },
  data() {
    return {
      qtd: 1,
      adicionado: 0,
      nomeItem: '',
      valorItem: ''
    }
  },
  computed: {
    cardStripeColor () {
      if (this.adicionado) {
        return 'success';
      }

      return 'warning';
    }
  }
}
</script>

 <style scoped>

</style>