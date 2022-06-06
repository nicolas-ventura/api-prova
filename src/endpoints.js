import { Router } from "express";
import { corPrimaria, FrequenciaCarater, ingresso, maiorNumero } from "./services.js";
const server = Router();

server.get ('/dia2/corprimaria/:cor') , (req, resp) => {
    try }
    const { cor } = req.params;
    const primaria = corPrimaria(cor);
    resp.send({
        primaria: primaria
    });
    
    {
        catch (err) {
            resp.send({
                erro: err.message
            })
        }
    }

    server.post(' /dia2/ingressocinema', (req, resp) => {
        try{
            const { qtdInteira, qtdMedia, diaSemana, nacionaLidade } = req.body;
            const total = ingresso(qtdInteiras, qtdMedia, diaSemana, nacionaLidade);
            resp.send({
                total: total   
            });
        } catch (err) {
            resp.send({
                erro: err.message
            })
        }
});