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
                  numeralPositiveOnly: true,
                  numericOnly: true
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
      class="no_selection"
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
            
          </div>
            
            
        </div>
      </div>
    </va-card>
  </div>

  <va-modal
    ref="itemModal"
    v-model="exibirModal"
    v-if="exibirModal"
    size="small"
    hide-default-actions
  >
    <template #content="{ ok }">
      <va-card-title>
        <h6 class="display-6 pt-4">Editar Item</h6>
      </va-card-title>
      <va-card-content>

        <div class="mb-4">
            <p class="mb-2">Nome</p>
            <va-input
              v-model="dadosModal.nome"
              placeholder="Nome"
              outline
            />
        </div>

        <div class="mb-4">
            <p class="mb-2">Quantidade</p>
            <va-counter
                v-model="dadosModal.qtd"
                outline
                margins="0px"
                :min="1"
                width="100%"
              />
        </div>

        <div class="mb-4">
            <p class="mb-2">Preço Unitário</p>
             <va-input
                v-model="dadosModal.preco"
                placeholder="0.00"
                outline
                :mask="{
                  numeral: true,
                  numeralDecimalScale: 2,
                  numeralPositiveOnly: true,
                  numericOnly: true
                }"
              />
        </div>

        <div class="mb-4">
            <va-checkbox 
              v-model="dadosModal.adicionado" 
              color="success"
              label="Adicionado ao carrinho?" 
            />
          </div>

        <div class="mt-4 row justify--center">
          <va-button 
            icon="save" 
            :rounded="false" 
            size="large"
            @click="salvarItemModal()"
          >
            Salvar Item
          </va-button>

        </div>
        
        <div class="mt-4 row justify--center">
      
          <va-button 
            icon="delete"
            :rounded="false" 
            color="danger"
            size="large"
            outline
            @click="removerItemModal()"
          >
            Remover Item
          </va-button>
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
  watch: {
    itens: {
      deep: true,
      handler(novoValor) {
        window.localStorage.setItem('LISTA_COMPRAS', JSON.stringify(novoValor));
      }
    }
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
    abrirModalItem (item) {
      this.dadosModal = item;
      this.indexModal = this.itens.indexOf(item);
      this.exibirModal = true;
    },
    salvarItemModal () {
      this.fecharModal();  
    },
    removerItemModal () {
      this.itens = this.itens.filter(i => i !== this.dadosModal);
      this.fecharModal();
    },
    fecharModal () {
      this.$refs.itemModal.hide();
      this.exibirModal = false;
      this.indexModal = undefined;
      this.dadosModal = [];
    },
  },
  mounted () {
    if (window.localStorage.getItem('LISTA_COMPRAS') !== null) {
      this.itens = JSON.parse(window.localStorage.getItem('LISTA_COMPRAS'));
    }
  }
}
</script>
<style scoped>
.no_selection {
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}
</style>
