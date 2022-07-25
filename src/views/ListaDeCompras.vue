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
        <div 
          class="flex align-self--center"
          style="flex-grow:1"
          @dblclick="abrirModalItem(item)"
        >
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
            <div class="flex" v-if="item.exibirRemover">
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

  <va-modal
    v-model="exibirModal"
    no-padding
  >
    <template #content>
      <va-card-title>
        Editar Item
      </va-card-title>
      <va-card-content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis, illum rem dolorum obcaecati dolorem. Laborum, odio ipsum qui quaerat itaque reiciendis error nemo tenetur beatae. Vel obcaecati magni maxime!
      </va-card-content>
      <va-card-actions>
        <va-button @click="ok" color="warning">Ok!</va-button>
      </va-card-actions>
    </template>
  </va-modal>

</template>

<script>
import { VaNavbar, VaCard, VaCounter, VaCheckbox, VaCardTitle, VaInput, VaModal, VaCardContent, VaCardActions } from 'vuestic-ui';

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
      itens: [],
      exibirModal: false,
      dadosModal: [],
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
        adicionado: false,
        exibirRemover: false
      });

      this.novoNome = '';
      this.novoPreco = '';

    },
    abrirModalItem (item) {
      this.dadosModal = item;
      this.exibirModal = true;
    }
    removerItem (item) {
      this.itens = this.itens.filter(i => i !== item);
    }
  }
}
</script>

 <style scoped>

</style>