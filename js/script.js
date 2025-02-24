let loggedInUser = null;

const inspectionQuestions = {
    "Linhas Aéreas de Média Tensão": {
        "POSTE": {
            "1.1": {
                "label": "Qual o numero de identificação do poste fiscalizado?(P1, P2, P3, ..., PN)",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.2": {
                "label": "Tipo de poste?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.3": {
                "label": "Engastamento do poste com base concretada?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.4": {
                "label": "poste enterrado diretamente?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.5": {
                "label": "Dimensões (Diâmetro e profundidade)?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.6": {
                "label": "Estai de subsolo instalado?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.7": {
                "label": "Verticalidade do poste no prumo?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.8": {
                "label": "Preenchimento da escavação e compactação da base do poste?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.9": {
                "label": "Ângulo de deflexão tensionamento e flexa?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.10": {
                "label": "Equipamentos e outros dispositivos?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.11": {
                "label": "Instalação de aterramento?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.12": {
                "label": "Instalação (cabos, hastes e conexões do aterramento)?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.13": {
                "label": "Gestão de resíduos, coleta, disposição, transporte e destinação final dos resíduos?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            },
            "1.14": {
                "label": "Translado e manutenção de equipamentos a óleo e SF6?",
                "detalhamentoOptions": ["Conforme", "Não Conforme - Defeito", "Não se Aplica"]
            }
        }
    },
    "Equipamentos no poste": {
        "DIMENSSÕES E ACESSÓRIOS": {
            "1.1": {
                "label": "Esquema e Dimensões",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "1.2": {
                "label": "Acessórios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "1.3": {
                "label": "Estrutura de Suporte",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "EUIPAMENTOS DE MT": {
            "2.1": {
                "label": "Chave Telecomandada / Religador / Regulador",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "2.2": {
                "label": "Conexões, terminais e conectores",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "2.3": {
                "label": "Transformador de Tensão e Correntes",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DE ATERRAMENTO DO EQUIPAMENTO": {
            "3.1": {
                "label": "Layout de montagem da Unidade terminal remota (UP) e Painel de Controle",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "3.2": {
                "label": "Conexões MT e BT, Bateria - UP, Painel de Controle",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "SOBRE TENSÃO DE PROTEÇÃO E INSTALAÇÃO DE ATERRAMENTO": {
            "4.1": {
                "label": "Para-raios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "4.2": {
                "label": "Instalação de aterramento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "MATERIAIS FORNECIDOS POR TERCEIROS": {
            "5.1": {
                "label": "Controle de qualidade dos materiais fornecidos por terceiros",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        }
    },
    "Transformador no poste": {
        "DIMENSSÕES E ACESSÓRIOS": {
            "1.1": {
                "label": "Esquema e dimenssões",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "1.2": {
                "label": "Acessórios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "1.3": {
                "label": "Estrutura de suporte",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DE TRANSFORMADORES": {
            "2.1": {
                "label": "Transformador",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "2.2": {
                "label": "Proteção MT e BT",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "2.3": {
                "label": "Para-raios",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DE ATERRAMENTO DO EQUIPAMENTO": {
            "3.1": {
                "label": "Instalação de aterramento do equipamento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "MATERIAIS FORNECIDOS POR TERCEIROS": {
            "4.1": {
                "label": "Controle de qualidade dos materiais",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        }
    },
    "Ligação Nova": {
        "ESTRUTURA E CAIXA DE MEDIÇÃO": {
            "1.1": {
                "label": "Placa de endereço e caixa para correspondencia",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "1.2": {
                "label": "A estrutura de medição esta dentro das normas",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "1.3": {
                "label": "A medição está na divisa, voltada para a via pública",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "RAMAL DE LIGAÇÃO": {
            "2.1": {
                "label": "Aplicada alça pré-formada",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "2.2": {
                "label": "Conexão do ramal",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "2.3": {
                "label": "O ramal foi instalado respeitando os limites de afastamento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "INSTALAÇÃO DO MEDIDOR": {
            "3.1": {
                "label": "O medidor foi instalado corretamento",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            },
            "3.2": {
                "label": "Display corretamento configurrado",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
            }
        },
        "MATERIAIS APLICADOS": {
            "4.1": {
                "label": "Controle de qualidade dos materiais",
                "detalhamentoOptions": ["DENTRO DOS PADRÕES", "FORA DOS PADRÕES", "NÃO SE APLICA"]
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
    console.log("Função login() iniciada");
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
        console.log("Login realizado com sucesso. Usuário:", loggedInUser);
        loginError.style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('inspectionForm').style.display = 'block'
        document.getElementById('campos_apos_login').style.display = 'block'
        document.getElementById('btn-proximo').style.display = 'block'
        document.body.classList.remove("form1-bg");
        document.body.classList.add("form2-bg");
    } else {
        console.log("Login falhou. Usuário ou senha incorretos");
        loginError.textContent = 'Nome de usuário ou senha incorretos.';
        loginError.style.display = 'block';
    }
    console.log("Função login() finalizada");
}
function validateForm1() {
    console.log("Função validateForm1() iniciada");
    const empresaIdElement = document.getElementById("empresaId");
    const contratoIdElement = document.getElementById("contratoId");
    const tagMotorElement = document.getElementById("tagMotor");
    const direcaoEElement = document.getElementById("direcaoE");
    const supervisorContratistaElement = document.getElementById("supervisorContratista");
    const setorElement = document.getElementById("inspeçãoTipo");

    const empresaId = empresaIdElement ? empresaIdElement.value.trim() : "";
    const contratoId = contratoIdElement ? contratoIdElement.value.trim() : "";
    const tagMotor = tagMotorElement ? tagMotorElement.value.trim() : "";
    const direcaoE = direcaoEElement ? direcaoEElement.value.trim() : "";
    const supervisorContratista = supervisorContratistaElement ? supervisorContratistaElement.value.trim() : "";
    const setor = setorElement ? setorElement.value : "";
    console.log("Valores do Form 1:", { empresaId, contratoId, tagMotor, direcaoE, supervisorContratista, setor });
    if (!empresaId) {
        console.log("Erro de validação: Unidade Enel não preenchida");
        alert("Por favor, preencha o campo 'Unidade Enel'.");
        return false;
    }
    if (!contratoId) {
        console.log("Erro de validação: Contrato não preenchido");
        alert("Por favor, preencha o campo 'Contrato'.");
        return false;
    }
    if (!tagMotor) {
        console.log("Erro de validação: Contratista não preenchido");
        alert("Por favor, preencha o campo 'Contratista'.");
        return false;
    }
    if (!direcaoE) {
        console.log("Erro de validação: Direção/E não preenchido");
        alert("Por favor, preencha o campo 'Direção/E'.");
        return false;
    }
    if (!supervisorContratista) {
        console.log("Erro de validação: Supervisor Contratista não preenchido");
        alert("Por favor, preencha o campo 'Supervisor Contratista'.");
        return false;
    }
    if (!setor) {
        console.log("Erro de validação: Tipo de Inspeção não selecionado");
        alert("Por favor, selecione um 'Tipo de Inspeção'.");
        return false;
    }
    console.log("Form 1 validado com sucesso.");
    console.log("Função validateForm1() finalizada com retorno true");
    return true;
}
function goToForm2() {
    console.log("Função goToForm2() iniciada");
    document.getElementById("inspectionForm").style.display = "block";
    document.getElementById('campos_apos_login').style.display = 'none';
    const inspectionType = document.getElementById("inspeçãoTipo").value;
    console.log("Tipo de inspeção selecionada:", inspectionType);
    document.getElementById("inspectionTitle").style.display = "block";
    document.getElementById("inspectionTitle").textContent = inspectionType;
    generateDynamicForm(inspectionType);
    document.getElementById('btn-proximo').style.display = 'none';
    document.getElementById('btn-gerar-relatorio').style.display = 'block';
    document.body.classList.remove("form1-bg");
    document.body.classList.add("form2-bg");
    console.log("Função goToForm2() finalizada");
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
            label.setAttribute("for", `detalhamento-${doc}-${itemId}`);

            const selectContainer = document.createElement("div");
            selectContainer.classList.add("selectContainer");

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

            // **ADICIONANDO A CAIXA DE OBSERVAÇÃO**
            const observacaoDiv = document.createElement('div');
            observacaoDiv.id = `observacao-${doc}-${itemId}`;
            observacaoDiv.style.display = 'block'; // SEMPRE VISÍVEL
            observacaoDiv.style.marginTop = '5px';

            const observacaoLabel = document.createElement('label');
            observacaoLabel.textContent = 'Observação:';
            observacaoLabel.style.marginRight = '5px';
            observacaoDiv.appendChild(observacaoLabel);

            const observacaoTextarea = document.createElement('textarea');
            observacaoTextarea.id = `observacao-texto-${doc}-${itemId}`;
            observacaoTextarea.name = `observacao-texto-${doc}-${itemId}`;
            observacaoTextarea.style.width = '100%';
            observacaoTextarea.style.minHeight = '50px';
            observacaoDiv.appendChild(observacaoTextarea);

            selectContainer.appendChild(observacaoDiv);

            /* REMOVENDO O EVENT LISTENER
            detalhamentoSelect.addEventListener('change', function() {
                console.log("Opção selecionada:", this.value);
                const naoSeAplica = 'Não se Aplica';
                const naoConforme = 'Não Conforme - Defeito';
                console.log("Comparando com:", naoSeAplica, naoConforme);

                if (this.value === naoSeAplica || this.value === naoConforme) {
                    console.log("Condição verdadeira!");
                    observacaoDiv.style.display = 'block';
                } else {
                    console.log("Condição falsa!");
                    observacaoDiv.style.display = 'none';
                }
            });
            */

            // Adiciona o botão para tirar foto e o elemento para exibir a imagem
            const photoContainer = document.createElement("div");
            photoContainer.classList.add("photo-container");

            const captureButton = document.createElement("button");
            captureButton.textContent = "Tirar Foto";
            captureButton.type = "button";
            captureButton.classList.add("capture-button");
            captureButton.onclick = () => capturePhoto(doc, itemId); // Adiciona a função de captura ao botão
            photoContainer.appendChild(captureButton);


            const imagePreview = document.createElement("img");
            imagePreview.id = `image-${doc}-${itemId}`;
            imagePreview.classList.add("image-preview");
            photoContainer.appendChild(imagePreview);
            selectContainer.appendChild(photoContainer)

            formGroup.appendChild(label);
            formGroup.appendChild(selectContainer);
            docSection.appendChild(formGroup);

        }
        formContainer.appendChild(docSection);
    }
    adjustSelectWidth();
}
// Variável para armazenar as fotos em base64 para cada pergunta
let capturedPhotos = {};
const video = document.createElement('video');

// Variável global para armazenar a stream da câmera
let cameraStream = null;

async function capturePhoto(doc, itemId) {
    const imagePreview = document.getElementById(`image-${doc}-${itemId}`);
    if (!imagePreview) return;

    try {
        // Se já houver uma stream ativa, pare-a
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop());
            cameraStream = null;
        }

        // Obter as informações dos dispositivos de mídia disponíveis
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        let deviceId;

        // Se houver mais de uma câmera, solicitar ao usuário para escolher
        if (videoDevices.length > 1) {
            deviceId = await chooseCamera(videoDevices);
            if (!deviceId) {
                console.log('Nenhuma câmera selecionada.');
                return;
            }
        } else if (videoDevices.length === 1) {
            // Se houver apenas uma câmera, usar o ID dela
            deviceId = videoDevices[0].deviceId;
        } else {
            alert('Nenhuma câmera disponível.');
            return;
        }

        // Obter a stream de vídeo da câmera selecionada
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: deviceId } }
        });

        video.srcObject = cameraStream;
        video.play();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 320;
        canvas.height = 240;

        // Aguardar um pequeno tempo para a câmera iniciar
        await new Promise(resolve => setTimeout(resolve, 100));

        // Desenhar o frame da câmera no canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Obter a imagem como um Data URL (base64)
        const photoDataUrl = canvas.toDataURL('image/png');

        // Armazenar a foto
        capturedPhotos[`${doc}-${itemId}`] = photoDataUrl;
        imagePreview.src = photoDataUrl;
        imagePreview.style.display = 'block';

    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
        alert('Não foi possível acessar a câmera. Verifique as permissões do seu navegador ou tente outra câmera.');
    } finally {
        // Não vamos parar a stream aqui, pois ela pode ser reutilizada
        video.remove();
    }
}

async function chooseCamera(videoDevices) {
    return new Promise((resolve) => {
        // Criar um diálogo ou interface para o usuário escolher a câmera
        const cameraOptions = videoDevices.map(device => `<option value="${device.deviceId}">${device.label}</option>`).join('');

        const modalHtml = `
            <div id="cameraModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center;">
                <div style="background-color: white; padding: 20px; border-radius: 5px;">
                    <label for="cameraSelect">Escolha a câmera:</label>
                    <select id="cameraSelect">
                        ${cameraOptions}
                    </select>
                    <button id="selectCameraButton">Selecionar</button>
                    <button id="cancelCameraButton">Cancelar</button>
                </div>
            </div>
        `;

        // Adicionar o HTML ao body
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('cameraModal');
        const select = document.getElementById('cameraSelect');
        const selectButton = document.getElementById('selectCameraButton');
        const cancelButton = document.getElementById('cancelCameraButton');

        // Lidar com a seleção da câmera
        selectButton.addEventListener('click', () => {
            resolve(select.value);
            modal.remove();
        });

        // Lidar com o cancelamento
        cancelButton.addEventListener('click', () => {
            resolve(null);
            modal.remove();
        });
    });
}

/*async function capturePhoto(doc, itemId) {
    const imagePreview = document.getElementById(`image-${doc}-${itemId}`);
    if (!imagePreview) return; // Verifica se o elemento de visualização existe
    let stream = null;
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } });
        //stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Defina a largura e altura do canvas para a imagem da câmera
        canvas.width = 320;
        canvas.height = 240;

        // Aguarde um pequeno tempo para a câmera iniciar
        await new Promise(resolve => setTimeout(resolve, 100));

        // Desenhe o frame da câmera no canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Obtenha a imagem como um Data URL (base64)
        const photoDataUrl = canvas.toDataURL('image/png');

        // Adicione a foto ao array de fotos para esta pergunta
        capturedPhotos[`${doc}-${itemId}`] = photoDataUrl;
        imagePreview.src = photoDataUrl;
        imagePreview.style.display = 'block';
    } catch (error) {
        console.error('Erro ao acessar a câmera:', error);
        alert('Não foi possível acessar a câmera. Verifique as permissões do seu navegador.');
    } finally {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        video.remove();
    }
}*/
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
            const label = document.querySelector(`label[for="${select.id}"]`);
            const labelText = label ? label.textContent : "Este campo";
            alert(`O campo '${labelText}' precisa ser preenchido corretamente.`);
            return false;
        }
    }
    return true;
}
function generateReport() {
    if (validateForm2()) {
        goToForm3();
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
    const inspectionType = document.getElementById("inspeçãoTipo").value;

    let tableContent = "<table>";
    tableContent += `<tr><th>Item</th><th>Detalhamento da Inspeção</th><th>Observação</th><th>Foto</th></tr>`;

    if (inspectionQuestions[inspectionType]) {
        for (const doc in inspectionQuestions[inspectionType]) {
            for (const itemId in inspectionQuestions[inspectionType][doc]) {
                const item = inspectionQuestions[inspectionType][doc][itemId];
                const detalhamentoSelect = document.getElementById(`detalhamento-${doc}-${itemId}`);
                let detalhamentoValue = detalhamentoSelect ? detalhamentoSelect.value : 'Não Respondido';

                // **OBTENDO O VALOR DA OBSERVAÇÃO**
                const observacaoTextarea = document.getElementById(`observacao-texto-${doc}-${itemId}`);
                const observacaoValue = observacaoTextarea ? observacaoTextarea.value : '';

                // Adiciona a foto ao relatório, se existir
                const photoDataUrl = capturedPhotos[`${doc}-${itemId}`] || "";
                const imageHtml = photoDataUrl ? `<img src="${photoDataUrl}" style="max-width: 100px; max-height: 100px;"/>` : "Sem foto";
                tableContent += `<tr><td>${item.label}</td><td>${detalhamentoValue}</td><td>${observacaoValue}</td><td>${imageHtml}</td></tr>`;
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
    const marca = document.getElementById("marca1").value ? document.getElementById("marca1").value.toUpperCase() : "Não Informado";
    const dataHora = new Date().toLocaleString();
    const tipo = document.getElementById("inspeçãoTipo").value;
    const observacoes = document.getElementById('observacoes').value;
    const asBuiltStatus = document.getElementById('asBuiltStatus').value;

    let tableContent = "<table>";
    tableContent += `<tr><th>Item</th><th>Detalhamento da Inspeção</th><th>Observação</th><th>Foto</th></tr>`; // Adiciona a coluna Observação e Foto

    if (inspectionQuestions[inspectionType]) {
        for (const doc in inspectionQuestions[inspectionType]) {
            for (const itemId in inspectionQuestions[inspectionType][doc]) {
                const item = inspectionQuestions[inspectionType][doc][itemId];
                const detalhamentoSelect = document.getElementById(`detalhamento-${doc}-${itemId}`);
                let detalhamentoValue = detalhamentoSelect ? detalhamentoSelect.value : 'Não Respondido';

                // **OBTENDO O VALOR DA OBSERVAÇÃO**
                const observacaoTextarea = document.getElementById(`observacao-texto-${doc}-${itemId}`);
                const observacaoValue = observacaoTextarea ? observacaoTextarea.value : ''; // Obtém o valor da textarea

                // Adiciona a foto ao relatório, se existir
                const photoDataUrl = capturedPhotos[`${doc}-${itemId}`] || "";
                const imageHtml = photoDataUrl ? `<img src="${photoDataUrl}" style="max-width: 100px; max-height: 100px;"/>` : "Sem foto";

                tableContent += `<tr><td>${item.label}</td><td>${detalhamentoValue}</td><td>${observacaoValue}</td><td>${imageHtml}</td></tr>`; // Adiciona a observação e a foto na linha
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
    document.getElementById("print-container").innerHTML = printContent;

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.html(document.getElementById("print-container"), {
        callback: function (doc) {
            const pdfName = `relatorio_inspecao_${dataHora.replace(/[\/:]/g, '_')}.pdf`;
            doc.save(pdfName);

            //const compareAnother = confirm("Deseja realizar outra inspeção?");
            //if (!compareAnother) {

            resetForms();
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('inspectionForm').style.display = 'none';
            document.getElementById('reportForm').style.display = 'none';
            document.body.classList.add('form1-bg');
            document.body.classList.remove("form2-bg");
            document.body.classList.remove("form3-bg");
            loggedInUser = null;

            /*} else {
                resetInspectionForm();
                document.body.classList.remove("form3-bg");
                document.body.classList.add("form2-bg");
                document.getElementById('inspectionTitle').style.display = "none";
                document.getElementById('inspectionForm').style.display = "block";
                document.getElementById('reportForm').style.display = "none";

            }*/
        },
        margin: [20, 10, 20, 10],
        autoPaging: "text",
        x: 0,
        y: 0,
    });
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
    capturedPhotos = {}; // Limpa as fotos capturadas
}
function resetInspectionForm() {
    document.getElementById("inspectionForm").reset();
    document.getElementById("reportForm").reset();
    document.getElementById("resultados").innerHTML = "";
    document.getElementById('btn-print').style.display = 'none';
    document.getElementById('btn-voltar-report').style.display = 'none'
    const dynamicFormContainer = document.getElementById("dynamicFormContainer");
    dynamicFormContainer.innerHTML = "";
    capturedPhotos = {}; // Limpa as fotos capturadas
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
    capturedPhotos = {};  // Limpa as fotos capturadas
}
function showDynamicForm() {
    console.log("Função showDynamicForm() iniciada");
    if (validateForm1()) {
        console.log("Form 1 validado. Chamando goToForm2()");
        goToForm2(); // Chama a função goToForm2 aqui
        document.getElementById('campos_apos_login').style.display = 'none';
        console.log("Função showDynamicForm() finalizada");
        const inspectionType = document.getElementById("inspeçãoTipo").value;

    }
    else {
        console.log("A validação do Form 1 falhou")
    }
}
