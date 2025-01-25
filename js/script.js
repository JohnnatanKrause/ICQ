let loggedInUser = null;

const inspectionQuestions = {
    "Linhas Aéreas de Média Tensão": {
        "POSTE": {
            "1.1": {
                "label": "Tipo de Poste",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "1.2": {
                "label": "Verificação (Veja figura 1 abaixo)",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "1.3": {
                "label": "Concretagem do poste conforme projeto ou padrão",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "CONDUTORES/CABOS E ACESSÓRIOS/RAMAIS": {
            "2.1": {
                "label": "Condutor ou cabos",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "2.2": {
                "label": "Tensionamento e Flecha",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "2.3": {
                "label": "Amarração",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "ATERRAMENTO": {
            "3.1": {
                "label": "Instalação (cabos e hastes)",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "3.2": {
                "label": "Conexão do aterramento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "MATERIAIS": {
            "4.1": {
                "label": "Controle de qualidade dos materiais",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        }
    },
    "Equipamentos no poste": {
        "DIMENSSÕES E ACESSÓRIOS": {
            "1.1": {
                "label": "Esquema e Dimensões",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "1.2": {
                "label": "Acessórios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "1.3": {
                "label": "Estrutura de Suporte",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "EUIPAMENTOS DE MT": {
            "2.1": {
                "label": "Chave Telecomandada / Religador / Regulador",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "2.2": {
                "label": "Conexões, terminais e conectores",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "2.3": {
                "label": "Transformador de Tensão e Correntes",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DE ATERRAMENTO DO EQUIPAMENTO": {
            "3.1": {
                "label": "Layout de montagem da Unidade terminal remota (UP) e Painel de Controle",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "3.2": {
                "label": "Conexões MT e BT, Bateria - UP, Painel de Controle",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "SOBRE TENSÃO DE PROTEÇÃO E INSTALAÇÃO DE ATERRAMENTO": {
            "4.1": {
                "label": "Para-raios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "4.2": {
                "label": "Instalação de aterramento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "MATERIAIS FORNECIDOS POR TERCEIROS": {
            "5.1": {
                "label": "Controle de qualidade dos materiais fornecidos por terceiros",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        }
    },
    "Transformador no poste": {
        "DIMENSSÕES E ACESSÓRIOS": {
            "1.1": {
                "label": "Esquema e dimenssões",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "1.2": {
                "label": "Acessórios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "1.3": {
                "label": "Estrutura de suporte",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DE TRANSFORMADORES": {
            "2.1": {
                "label": "Transformador",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "2.2": {
                "label": "Proteção MT e BT",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            },
            "2.3": {
                "label": "Para-raios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DE ATERRAMENTO DO EQUIPAMENTO": {
            "3.1": {
                "label": "Instalação de aterramento do equipamento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        },
        "MATERIAIS FORNECIDOS POR TERCEIROS": {
            "4.1": {
                "label": "Controle de qualidade dos materiais",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "CRÍTICO", "GRAVE", "NÃO SE APLICA"]
            }
        }
    },
    "Ligação Nova": {
        "ESTRUTURA E CAIXA DE MEDIÇÃO": {
            "1.1": {
                "label": "Placa de endereço e caixa para correspondencia",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            },
            "1.2": {
                "label": "A estrutura de medição esta dentro das normas",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            },
            "1.3": {
                "label": "A medição está na divisa, voltada para a via pública",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            }
        },
        "RAMAL DE LIGAÇÃO": {
            "2.1": {
                "label": "Aplicada alça pré-formada",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            },
            "2.2": {
                "label": "Conexão do ramal",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            },
            "2.3": {
                "label": "O ramal foi instalado respeitando os limites de afastamento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            }
        },
        "INSTALAÇÃO DO MEDIDOR": {
            "3.1": {
                "label": "O medidor foi instalado corretamento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            },
            "3.2": {
                "label": "Display corretamento configurado",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            }
        },
        "MATERIAIS APLICADOS": {
            "4.1": {
                "label": "Controle de qualidade dos materiais",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"],
                "nivelDefeitoOptions": ["SEM DEFEITO", "COM DEFEITO", "GRAVE", "CRÍTICO"]
            }
        }
    }
};
function populateModelSelect() {
    // Remove a função de popular modelos
}
window.addEventListener("load", () => {
    // Remove a chamada do populateModels
    document.body.classList.add('form1-bg');
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("inspectionForm").style.display = "none";
    document.getElementById("reportForm").style.display = "none";
        document.getElementById('btn-proximo').style.display = "none";
});
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('login-error');

    if ((username === 'adm' && password === '123') ||
        (username === 'inspetor1' && password === 'senha1') ||
        (username === 'inspetor2' && password === 'senha2') ||
        (username === 'inspetor3' && password === 'senha3') ||
        (username === 'inspetor4' && password === 'senha4') ||
        (username === 'inspetor5' && password === 'senha5') ||
        (username === 'inspetor6' && password === 'senha6')) {

        loggedInUser = username; // Armazena o usuário logado
        loginError.style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('inspectionForm').style.display = 'block'
        document.getElementById('campos_apos_login').style.display = 'block'
         document.getElementById('btn-proximo').style.display = 'block'
        document.body.classList.remove("form1-bg");
        document.body.classList.add("form2-bg");
    } else {
        loginError.textContent = 'Nome de usuário ou senha incorretos.';
        loginError.style.display = 'block';
    }
}
function validateForm1() {
    const empresaId = document.getElementById("empresaId").value.trim();
    const contratoId = document.getElementById("contratoId").value.trim();
    const tagMotor = document.getElementById("tagMotor").value.trim();
    const direcaoE = document.getElementById("direcaoE").value.trim();
    const supervisorContratista = document.getElementById("supervisorContratista").value.trim();
    const marca = document.getElementById("marca1").value.trim();
    const setor = document.getElementById("inspeçãoTipo").value;

    if (!empresaId) {
        alert("Por favor, preencha o campo 'Unidade Enel'.");
        return false;
    }
    if (!contratoId) {
        alert("Por favor, preencha o campo 'Contrato'.");
        return false;
    }
    if (!tagMotor) {
        alert("Por favor, preencha o campo 'Contratista'.");
        return false;
    }
    if (!direcaoE) {
        alert("Por favor, preencha o campo 'Direção/E'.");
        return false;
    }
    if (!supervisorContratista) {
        alert("Por favor, preencha o campo 'Supervisor Contratista'.");
        return false;
    }
    if (!marca) {
        alert("Por favor, preencha o campo 'Número do poste inspecionado'.");
        return false;
    }

    if (!setor) {
        alert("Por favor, selecione um 'Tipo de Inspeção'.");
        return false;
    }
    return true;
}
function goToForm2() {
     if (validateForm1()) {
        document.getElementById("inspectionForm").style.display = "block";
        document.getElementById('campos_apos_login').style.display = 'none';
        const inspectionType = document.getElementById("inspeçãoTipo").value;
        document.getElementById("inspectionTitle").style.display = "block";
        document.getElementById("inspectionTitle").textContent = inspectionType;
        generateDynamicForm(inspectionType);
        document.getElementById('btn-proximo').style.display = 'none';
        document.getElementById('btn-gerar-relatorio').style.display = 'block';
        document.body.classList.remove("form1-bg");
        document.body.classList.add("form2-bg");
    }
}
function generateDynamicForm(inspectionType) {
    const formContainer = document.getElementById("dynamicFormContainer");
    formContainer.innerHTML = "";

    if (!inspectionQuestions[inspectionType]) {
        formContainer.innerHTML = "<p>Nenhuma pergunta configurada para este tipo de inspeção.</p>";
        return;
    }

    for (const doc in inspectionQuestions[inspectionType]) {
        const docSection = document.createElement("div");
        const docTitle = document.createElement('h3');
        docTitle.textContent = doc;
        docSection.appendChild(docTitle);

        for (const itemId in inspectionQuestions[inspectionType][doc]) {
            const item = inspectionQuestions[inspectionType][doc][itemId];
            const formGroup = document.createElement("div");
            formGroup.classList.add("form-group");

            const label = document.createElement("label");
            label.textContent = item.label;
            label.setAttribute("for", `detalhamento-${doc}-${itemId}`); // Use o mesmo for para ambos os selects

            const selectContainer = document.createElement("div");
            selectContainer.classList.add("selectContainer"); // Adicionando a classe para formatação
            // Create select for Detalhamento da Inspeção
            const detalhamentoSelect = document.createElement("select");
            detalhamentoSelect.id = `detalhamento-${doc}-${itemId}`;
            detalhamentoSelect.name = `detalhamento-${doc}-${itemId}`;
            detalhamentoSelect.required = true;
            let defaultDetalhamento = document.createElement('option');
            defaultDetalhamento.value = "";
            defaultDetalhamento.text = "Selecione o detalhamento";
            detalhamentoSelect.appendChild(defaultDetalhamento);
            item.detalhamentoOptions.forEach(option => {
                const detalhamentoOption = document.createElement("option");
                detalhamentoOption.value = option;
                detalhamentoOption.text = option;
                detalhamentoSelect.appendChild(detalhamentoOption);
            });
            selectContainer.appendChild(detalhamentoSelect);

            // Create select for Nível de Defeito
            const nivelDefeitoSelect = document.createElement("select");
            nivelDefeitoSelect.id = `nivelDefeito-${doc}-${itemId}`;
            nivelDefeitoSelect.name = `nivelDefeito-${doc}-${itemId}`;
            nivelDefeitoSelect.required = true;
            let defaultNivelDefeito = document.createElement('option');
            defaultNivelDefeito.value = "";
            defaultNivelDefeito.text = "Selecione o nível de defeito";
            nivelDefeitoSelect.appendChild(defaultNivelDefeito);
            item.nivelDefeitoOptions.forEach(option => {
                const nivelDefeitoOption = document.createElement("option");
                nivelDefeitoOption.value = option;
                nivelDefeitoOption.text = option;
                nivelDefeitoSelect.appendChild(nivelDefeitoOption);
            });
            selectContainer.appendChild(nivelDefeitoSelect);


            formGroup.appendChild(label);
            formGroup.appendChild(selectContainer);
            docSection.appendChild(formGroup);
        }
        formContainer.appendChild(docSection);
    }
    adjustSelectWidth();
}
function adjustSelectWidth() {
    const selects = document.querySelectorAll('.form-group .selectContainer select');
    selects.forEach(select => {
        const tempSelect = document.createElement('select');
        tempSelect.style.visibility = 'hidden';
        tempSelect.style.position = 'absolute';
        tempSelect.style.width = 'auto';

        Array.from(select.options).forEach(option => {
            const tempOption = document.createElement('option');
            tempOption.text = option.text;
            tempSelect.add(tempOption);
        });
        document.body.appendChild(tempSelect);
        const width = tempSelect.offsetWidth;
        document.body.removeChild(tempSelect);
        select.style.width = `${width + 10}px`; // Adiciona 10px para um pouco de margem
    });
}
// Chama a função sempre que o form dinâmico for gerado
function generateDynamicForm(inspectionType) {
    const formContainer = document.getElementById("dynamicFormContainer");
    formContainer.innerHTML = "";

    if (!inspectionQuestions[inspectionType]) {
        formContainer.innerHTML = "<p>Nenhuma pergunta configurada para este tipo de inspeção.</p>";
        return;
    }

    for (const doc in inspectionQuestions[inspectionType]) {
        const docSection = document.createElement("div");
        const docTitle = document.createElement('h3');
        docTitle.textContent = doc;
        docSection.appendChild(docTitle);

        for (const itemId in inspectionQuestions[inspectionType][doc]) {
            const item = inspectionQuestions[inspectionType][doc][itemId];
            const formGroup = document.createElement("div");
            formGroup.classList.add("form-group");

            const label = document.createElement("label");
            label.textContent = item.label;
            label.setAttribute("for", `detalhamento-${doc}-${itemId}`); // Use o mesmo for para ambos os selects

            const selectContainer = document.createElement("div");
            selectContainer.classList.add("selectContainer"); // Adicionando a classe para formatação
            // Create select for Detalhamento da Inspeção
            const detalhamentoSelect = document.createElement("select");
            detalhamentoSelect.id = `detalhamento-${doc}-${itemId}`;
            detalhamentoSelect.name = `detalhamento-${doc}-${itemId}`;
            detalhamentoSelect.required = true;
            let defaultDetalhamento = document.createElement('option');
            defaultDetalhamento.value = "";
            defaultDetalhamento.text = "Selecione o detalhamento";
            detalhamentoSelect.appendChild(defaultDetalhamento);
            item.detalhamentoOptions.forEach(option => {
                const detalhamentoOption = document.createElement("option");
                detalhamentoOption.value = option;
                detalhamentoOption.text = option;
                detalhamentoSelect.appendChild(detalhamentoOption);
            });
            selectContainer.appendChild(detalhamentoSelect);

            // Create select for Nível de Defeito
            const nivelDefeitoSelect = document.createElement("select");
            nivelDefeitoSelect.id = `nivelDefeito-${doc}-${itemId}`;
            nivelDefeitoSelect.name = `nivelDefeito-${doc}-${itemId}`;
            nivelDefeitoSelect.required = true;
            let defaultNivelDefeito = document.createElement('option');
            defaultNivelDefeito.value = "";
            defaultNivelDefeito.text = "Selecione o nível de defeito";
            nivelDefeitoSelect.appendChild(defaultNivelDefeito);
            item.nivelDefeitoOptions.forEach(option => {
                const nivelDefeitoOption = document.createElement("option");
                nivelDefeitoOption.value = option;
                nivelDefeitoOption.text = option;
                nivelDefeitoSelect.appendChild(nivelDefeitoOption);
            });
            selectContainer.appendChild(nivelDefeitoSelect);


            formGroup.appendChild(label);
            formGroup.appendChild(selectContainer);
            docSection.appendChild(formGroup);
        }
        formContainer.appendChild(docSection);
    }
    adjustSelectWidth();
}
function validateForm2() {
    const inspectionType = document.getElementById("inspeçãoTipo").value;
    if (!inspectionType) {
        alert("Por favor, selecione o tipo de inspeção!");
        return false;
    }

    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    const selectElements = dynamicFormContainer.querySelectorAll('select[required]');

    for (let select of selectElements) {
        if (!select.value) {
            // Encontrar o label diretamente usando o atributo 'for'
            const label = document.querySelector(`label[for="${select.id}"]`);
            const labelText = label ? label.textContent : "Este campo";
            alert(`Por favor, preencha o campo ${labelText} corretamente!`);
            return false;
        }
    }
    return true;
}
function generateReport() {
    if (validateForm1()) {
        goToForm2();
    }
}

function goToForm3() {
    if (validateForm2()) {
        document.getElementById("inspectionForm").style.display = "none";
        document.getElementById("reportForm").style.display = "block";
        document.body.classList.remove("form2-bg");
        document.body.classList.add("form3-bg");

        // Obtem o tipo de inspeção
        const inspectionType = document.getElementById('inspeçãoTipo').value;
        // Exibe o tipo de inspeção no cabeçalho do relatório
        document.getElementById('reportInspectionType').textContent = `Inspeção: ${inspectionType}`;

        generateReportSummary();
        document.getElementById("btn-print").style.display = "block";

    }
}
function generateReportSummary() {
    const resultsDiv = document.getElementById("resultados");
    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    const inspectionType = document.getElementById("inspeçãoTipo").value;

    let tableContent = "<table>";
    tableContent += `<tr><th>Item</th><th>Detalhamento da Inspeção</th><th>Nível de Defeito</th></tr>`;

    if (inspectionQuestions[inspectionType]) {
        for (const doc in inspectionQuestions[inspectionType]) {
            for (const itemId in inspectionQuestions[inspectionType][doc]) {
                const item = inspectionQuestions[inspectionType][doc][itemId];
                const detalhamentoSelect = document.getElementById(`detalhamento-${doc}-${itemId}`);
                const nivelDefeitoSelect = document.getElementById(`nivelDefeito-${doc}-${itemId}`);

                let detalhamentoValue = detalhamentoSelect ? detalhamentoSelect.value : 'Não Respondido';
                let nivelDefeitoValue = nivelDefeitoSelect ? nivelDefeitoSelect.value : 'Não Respondido';

                tableContent += `<tr><td>${item.label}</td><td>${detalhamentoValue}</td><td>${nivelDefeitoValue}</td></tr>`;

            }
        }
    }

    tableContent += "</table>";
    resultsDiv.innerHTML = tableContent;
}
function generateReportSummary() {
    const resultsDiv = document.getElementById("resultados");
    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    const inspectionType = document.getElementById("inspeçãoTipo").value;

    let tableContent = "<table>";
    tableContent += `<tr><th>Item</th><th>Detalhamento da Inspeção</th><th>Nível de Defeito</th></tr>`;

    if (inspectionQuestions[inspectionType]) {
        for (const doc in inspectionQuestions[inspectionType]) {
            for (const itemId in inspectionQuestions[inspectionType][doc]) {
                const item = inspectionQuestions[inspectionType][doc][itemId];
                const detalhamentoSelect = document.getElementById(`detalhamento-${doc}-${itemId}`);
                const nivelDefeitoSelect = document.getElementById(`nivelDefeito-${doc}-${itemId}`);

                let detalhamentoValue = detalhamentoSelect ? detalhamentoSelect.value : 'Não Respondido';
                let nivelDefeitoValue = nivelDefeitoSelect ? nivelDefeitoSelect.value : 'Não Respondido';

                tableContent += `<tr><td>${item.label}</td><td>${detalhamentoValue}</td><td>${nivelDefeitoValue}</td></tr>`;

            }
        }
    }

    tableContent += "</table>";
    resultsDiv.innerHTML = tableContent;
}
function printComparison() {
    const resultsDiv = document.getElementById("resultados");
    const inspectionType = document.getElementById("inspeçãoTipo").value;

    if (resultsDiv.innerHTML.trim() === "") {
        alert("Realize uma comparação antes de imprimir.");
        return;
    }
    const operadorId = document.getElementById("username").value;
    const empresaId = document.getElementById("empresaId").value;
    const contratoId = document.getElementById("contratoId").value;
    const tagMotor = document.getElementById("tagMotor").value;
    const direcaoE = document.getElementById("direcaoE").value;
    const supervisorContratista = document.getElementById("supervisorContratista").value;
    const marca = document.getElementById("marca1").value.toUpperCase();
    const dataHora = new Date().toLocaleString();
    const tipo = document.getElementById("inspeçãoTipo").value;
    const observacoes = document.getElementById('observacoes').value; // Obtem as observações
    const asBuiltStatus = document.getElementById('asBuiltStatus').value; // Obtem a seleção
    let tableContent = "<table>";
    tableContent += `<tr><th>Item</th><th>Detalhamento da Inspeção</th><th>Nível de Defeito</th></tr>`;

    if (inspectionQuestions[inspectionType]) {
        for (const doc in inspectionQuestions[inspectionType]) {
            for (const itemId in inspectionQuestions[inspectionType][doc]) {
                const item = inspectionQuestions[inspectionType][doc][itemId];
                const detalhamentoSelect = document.getElementById(`detalhamento-${doc}-${itemId}`);
                const nivelDefeitoSelect = document.getElementById(`nivelDefeito-${doc}-${itemId}`);

                let detalhamentoValue = detalhamentoSelect ? detalhamentoSelect.value : 'Não Respondido';
                let nivelDefeitoValue = nivelDefeitoSelect ? nivelDefeitoSelect.value : 'Não Respondido';

                tableContent += `<tr><td>${item.label}</td><td>${detalhamentoValue}</td><td>${nivelDefeitoValue}</td></tr>`;
            }
        }
    }
    tableContent += "</table>";
    let printContent = `
    <h1 style="text-align: center; font-size: 1.5em; font-weight: bold;">Relatório de Inspeção de Qualidade</h1>
        <h2 style="text-align: center; font-size: 1.2em; font-weight: bold; margin-top: 10px;"><p><b>Inspeção Realizada:</b> ${dataHora}</p></h2>
        <h2 style="text-align: center; font-size: 1.2em; font-weight: bold; margin-top: 10px;"><p><b>Tipo de Inspeção:</b> ${tipo}</p></h2>
        <div style="display: flex; justify-content: space-between;">
        <div style="width: 48%;">
        <p><b>Inspetor:</b> ${operadorId}</p>
        <p><b>Unidade Enel:</b> ${empresaId}</p>
        <p><b>Contrato:</b> ${contratoId}</p>     
        </div>
        <div style="width: 48%;">
        <p><b>Contratista:</b> ${tagMotor}</p>
        <p><b>Supervisor Contratista:</b> ${supervisorContratista}</p>
        <p><b>Número do poste inspecionado:</b> ${marca}</p>
        <p><b>Direção/E:</b> ${direcaoE}</p>
        </div>
        </div>
        ${tableContent}
        <div style="display: flex; justify-content: center; margin-bottom: 20px;">
        <p style="font-weight: bold;"><b>Resultado da Inspeção: </b>${asBuiltStatus}</p>
        </div>
        <div style="display: flex; justify-content: center; margin-bottom: 20px;">
        <p style="font-weight: bold;"><b>Observações: </b>${observacoes}</p>
        </div>
        <div style="display: flex; justify-content: space-around; margin-top: 20px;">
        <div style="text-align: center;">
        <p>__________________________</p>
        <p>Assinatura do Inspetor</p>
        </div>
        <div style="text-align: center;">
        <p>__________________________</p>
        <p>Assinatura do Responsável</p>
        </div>
        </div>
        <footer style="position: fixed; bottom: 0; width: 100%; text-align: center; font-size: 0.8em; margin-top: 0;">
        <b> © Todos os direitos reservados. Desenvolvido por: Johnnatan Krause Ribeiro Moreno<br>
        © Tel:(45) 9 8821-3899                       E-mail: johnnatankrause@gmail.com</b>
        </footer>
`;
    const printIframe = document.createElement('iframe');
    printIframe.style.display = 'none';
    document.body.appendChild(printIframe);

    const printDocument = printIframe.contentDocument || printIframe.contentWindow.document;

    printDocument.open();
    printDocument.write(`<html><head><title>Análise de dados de Inspeção</title><style>body{font-family:sans-serif;} table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #ddd; padding: 8px; text-align: left; } th { background-color: #f2f2f2; }</style></head><body>${printContent}</body></html>`);
    printDocument.close();

    printIframe.contentWindow.focus();
    printIframe.contentWindow.print();

    setTimeout(() => {
        document.body.removeChild(printIframe);
        const compareAnother = confirm("Deseja realizar outra inspeção?");
        if (!compareAnother) {
            resetForms();
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('inspectionForm').style.display = 'none';
            document.getElementById('reportForm').style.display = 'none';
            document.body.classList.add('form1-bg');
            document.body.classList.remove("form2-bg");
             document.body.classList.remove("form3-bg");
            loggedInUser = null;
            
        } else {
            resetInspectionForm();
             document.body.classList.remove("form3-bg");
            document.body.classList.add("form2-bg");
               document.getElementById('inspectionTitle').style.display = "none";
            document.getElementById('inspectionForm').style.display = "block";
            document.getElementById('reportForm').style.display = "none";
        
        }
    }, 500);
}
function resetForms() {
    document.getElementById("loginForm").reset();
    document.getElementById("inspectionForm").reset();
    document.getElementById("reportForm").reset();
    document.getElementById('campos_apos_login').style.display = 'none'
    document.getElementById('btn-proximo').style.display = 'none'
    document.getElementById("resultados").innerHTML = "";
    document.getElementById('btn-print').style.display = 'none'
    document.getElementById('btn-voltar-report').style.display = 'none'
    document.body.classList.remove("form2-bg");
    document.body.classList.remove("form3-bg");
    document.body.classList.add('form1-bg');
    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    dynamicFormContainer.innerHTML = "";
}
function resetInspectionForm() {
    document.getElementById("inspectionForm").reset();
    document.getElementById("reportForm").reset();
    document.getElementById("resultados").innerHTML = "";
    document.getElementById('btn-print').style.display = 'none';
    document.getElementById('btn-voltar-report').style.display = 'none'
    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    dynamicFormContainer.innerHTML = "";
}
function voltarCadastro() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('inspectionForm').style.display = 'block';
    document.getElementById('reportForm').style.display = 'none';
    document.body.classList.remove("form3-bg");
    document.body.classList.add('form2-bg');
    document.getElementById('inspectionTitle').style.display = "none";
    document.getElementById('btn-print').style.display = 'none'
    document.getElementById('btn-voltar-report').style.display = 'none'

    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    dynamicFormContainer.innerHTML = "";
}