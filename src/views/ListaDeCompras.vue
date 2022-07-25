 <template>
  <div class="mb-4">
    <va-card style="padding: 0.75rem">
      <va-card-title style="padding: 0.25rem">Adicionar item à lista</va-card-title>
      <div class="row">
        <div class="flex align-self--center xs6">
            <va-input
              label="Nome"
              v-model="novoNome"
              placeholder="Nome"
              class="mr-1"
              outline
            />
        </div>
        <div class="flex align-self--center xs5">
              <va-input
                v-model="novoPreco"
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
        <div class="flex align-self--center xs1">
              <va-button 
                icon="add"
                :rounded="false"
                class="ml-1"
                color="primary"
                @click="adicionarItem()"
              />
         </div>
      </div>
    </va-card>
  </div>

  <div style="margin:10px">
    <va-card 
      v-for="(item, index) in itens"
      stripe
      :stripe-color="item.adicionado ? 'success' : 'warning'" 
      style="padding: 0.75rem 0.5rem 0.5rem 0.5rem; margin-bottom: 10px"
    >
      <div class="row">
        <div class="flex align-self--center" style="flex-grow:1">
          <div>
            <va-checkbox 
              v-model="item.adicionado" 
              color="success"
              :label="item.nome" 
            />
          </div>
        </div>
        <div class="flex align-self--center">
          <div class="row justify--end">
            <div class="flex">
              <va-counter
                v-model="item.qtd"
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
                @click="removerItem(item)"
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
      novoNome: '',
      nomePreco: '',
      itens: []
    }
  },
  computed: {
    
  },
  methods: {
    adicionarItem () {
      this.itens.push({
        nome: this.novoNome,
        preco: this.novoPreco,
        qtd: 1,
        adicionado: false
      });

      this.novoNome = '';
      this.novoPreco = '';

    },
    removerItem (item) {
      this.itens = this.itens.filter(i => i !== item);
    }
  }
}
</script>

 <style scoped>

</style>