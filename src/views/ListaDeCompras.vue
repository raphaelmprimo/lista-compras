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
    v-if="exibirModal"
    no-padding
    size="small"
    blur
    hide-default-actions
  >
    <template #content="{ ok }">
      <va-card-title>
        Editar Item
      </va-card-title>
      <va-card-content>

        <div>
            <va-input
              label="Nome"
              v-model="dadosModal.nome"
              placeholder="Nome"
              outline
            />
        </div>

        <div>
            <va-counter
                v-model="dadosModal.qtd"
                outline
                margins="0px"
                :min="1"
              />
        </div>

        <div>
              <va-input
                v-model="dadosModal.preco"
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

        <div>
            <va-button @click="salvarItemModal()">Salvar Item</va-button
        </div>
        
        
      </va-card-content>
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
    VaInput,
    VaModal,
    VaCardContent,
    VaCardActions
  },
  data() {
    return {
      novoNome: '',
      nomePreco: '',
      itens: [],
      exibirModal: false,
      dadosModal: [],
      indexModal: undefined
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
      this.indexModal = this.itens.indexOf(item);
      this.exibirModal = true;
    },
    salvarItemModal () {
      this.itens[this.indexModal] = this.dadosModal;
      this.exibirModal = false;
      this.indexModal = undefined;
      this.dadosModal = [];
    },
    removerItem (item) {
      this.itens = this.itens.filter(i => i !== item);
    },
  }
}
</script>

 <style scoped>

</style>