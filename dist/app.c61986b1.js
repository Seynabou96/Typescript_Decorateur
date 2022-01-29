// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/listeReservations.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListeReservationView = void 0;

var ListeReservationView =
/** @class */
function () {
  function ListeReservationView() {
    this.ul = document.querySelector('.ulListeReservation');
  }

  ListeReservationView.prototype.update = function (state) {
    var _this = this; //récupération du tableau d'appartements


    var arrayR = state.getAppartements(); //initialisation à "vide" de l'ul pour résestituer que les éléments compris dans le tableau

    this.ul.innerHTML = ''; //Application sur chaque élément du tableau

    arrayR.forEach(function (reservation) {
      var liHtml = document.createElement('li');
      var headHtml = document.createElement('h4');
      var paraHtml = document.createElement('p');
      liHtml.className = 'one';
      headHtml.innerText = 'Réservation';
      paraHtml.innerHTML = reservation.setText();

      _this.ul.append(liHtml);

      liHtml.append(headHtml);
      liHtml.append(paraHtml);
    });
  };

  return ListeReservationView;
}();

exports.ListeReservationView = ListeReservationView;
},{}],"classes/AppartementAvecAbonnement.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appartementAvecAbonnementServiceMenage = exports.appartementAvecAbonnementParking = exports.appartementAvecAbonnementResto = exports.AppartementAvecAbonnement = void 0; //classe des Abonnements comme Options

var AppartementAvecAbonnement =
/** @class */
function () {
  function AppartementAvecAbonnement(appartement, tarif) {
    this.AppartementSimple = appartement;
    this.tarif = tarif;
  } //retourne le nombre d'appartements


  AppartementAvecAbonnement.prototype.getNombre = function () {
    return this.AppartementSimple.getNombre();
  }; //retourne le prix de l'abonnement uniquement


  AppartementAvecAbonnement.prototype.prix = function () {
    return this.tarif * this.getNombre();
  }; //methode de base


  AppartementAvecAbonnement.prototype.showDetails = function () {
    return "".concat(this.AppartementSimple.showDetails(), " + ").concat(this.tarif);
  };

  return AppartementAvecAbonnement;
}();

exports.AppartementAvecAbonnement = AppartementAvecAbonnement; ////classes avec Options

var appartementAvecAbonnementResto =
/** @class */
function (_super) {
  __extends(appartementAvecAbonnementResto, _super);

  function appartementAvecAbonnementResto() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return appartementAvecAbonnementResto;
}(AppartementAvecAbonnement);

exports.appartementAvecAbonnementResto = appartementAvecAbonnementResto;

var appartementAvecAbonnementParking =
/** @class */
function (_super) {
  __extends(appartementAvecAbonnementParking, _super);

  function appartementAvecAbonnementParking() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return appartementAvecAbonnementParking;
}(AppartementAvecAbonnement);

exports.appartementAvecAbonnementParking = appartementAvecAbonnementParking;

var appartementAvecAbonnementServiceMenage =
/** @class */
function (_super) {
  __extends(appartementAvecAbonnementServiceMenage, _super);

  function appartementAvecAbonnementServiceMenage() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return appartementAvecAbonnementServiceMenage;
}(AppartementAvecAbonnement);

exports.appartementAvecAbonnementServiceMenage = appartementAvecAbonnementServiceMenage;
},{}],"classes/reservation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reservation = void 0;

var AppartementAvecAbonnement_1 = require("./AppartementAvecAbonnement");

var Reservation =
/** @class */
function () {
  function Reservation(prix) {
    this.Appartements = [];
    this.observers = [];
    this.solde = prix;
  } //enregistrer un Observateur


  Reservation.prototype.subscribe = function (obs) {
    this.observers.push(obs);
    obs.update(this);
    console.log('subscribe');
  }; //annuler l'enregistrement d'un Observateur 


  Reservation.prototype.unsubscribe = function (obs) {
    var index = this.observers.indexOf(obs);
    this.observers.splice(index, 1);
    console.log('unsubscribe');
  }; //le notifier


  Reservation.prototype.notify = function () {
    var _this = this;

    this.observers.forEach(function (obs) {
      return obs.update(_this);
    });
    console.log('notify');
  }; //ajout d'un appartement au tableau d'Appartements avec le calcul de la solde en se basant
  //sur le prix normal et celui des extras.


  Reservation.prototype.addAppartement = function (unAppartement) {
    this.Appartements.push(unAppartement);
    this.solde += unAppartement.prix(); // console.log('add appartement');

    if (unAppartement.getchoix1() === true) {
      var appartementWithResto = new AppartementAvecAbonnement_1.appartementAvecAbonnementResto(unAppartement, 6000);
      this.solde += appartementWithResto.prix();
    }

    if (unAppartement.getchoix2() === true) {
      var appartementWithParking = new AppartementAvecAbonnement_1.appartementAvecAbonnementParking(unAppartement, 6000);
      this.solde += appartementWithParking.prix();
    }

    if (unAppartement.getchoix3() === true) {
      var appartementWithMenage = new AppartementAvecAbonnement_1.appartementAvecAbonnementServiceMenage(unAppartement, 6000);
      this.solde += appartementWithMenage.prix();
    }

    this.notify();
  }; //retourne le tableau d'appartements


  Reservation.prototype.getAppartements = function () {
    return this.Appartements;
  }; //retourne la solde totale


  Reservation.prototype.getSolde = function () {
    return this.solde;
  };

  return Reservation;
}();

exports.Reservation = Reservation;
},{"./AppartementAvecAbonnement":"classes/AppartementAvecAbonnement.ts"}],"classes/Appartement.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appartement = void 0; //classe à décorer

var Appartement =
/** @class */
function () {
  function Appartement(tarif, nom, prenom, nombre, resto, piscine, sport) {
    this.nomPersonne = nom;
    this.prenomPersonne = prenom;
    this.nombreChambres = nombre;
    this.check1 = resto;
    this.check2 = piscine;
    this.check3 = sport;
    this.price = tarif * this.nombreChambres;
  } //méthode qui retourne le nombre de chambres


  Appartement.prototype.getNombre = function () {
    return this.nombreChambres;
  }; //les choix cochés


  Appartement.prototype.getchoix1 = function () {
    return this.check1;
  };

  Appartement.prototype.getchoix2 = function () {
    return this.check2;
  };

  Appartement.prototype.getchoix3 = function () {
    return this.check3;
  }; //le prix d'un appartement


  Appartement.prototype.prix = function () {
    return this.price;
  }; //le texte a envoyé a la listeView


  Appartement.prototype.setText = function () {
    return "".concat(this.getName(), ", votre r\xE9servation a \xE9t\xE9 valid\xE9 avec les options: <br>\n        Abonnement au Restaurant : ").concat(this.check1 === true ? 'oui, ' : 'non,', " <br>\n        Abonnement au parking : ").concat(this.check2 === true ? 'oui, ' : 'non,', " <br>\n        Abonnement au service de M\xE9nage : ").concat(this.check3 === true ? 'oui, ' : 'non,');
  }; //une méthode de base du premier exemple


  Appartement.prototype.showDetails = function () {
    return "Prix total : ".concat(this.prix(), " (tarif normaml)");
  }; //retourne le nom complet


  Appartement.prototype.getName = function () {
    return "".concat(this.prenomPersonne, " ").concat(this.nomPersonne, " ");
  };

  return Appartement;
}();

exports.Appartement = Appartement;
},{}],"classes/soldeView.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.soldeView = void 0;

var soldeView =
/** @class */
function () {
  function soldeView() {
    this.div = document.querySelector('#solde');
  }

  soldeView.prototype.update = function (state) {
    //récuparation de la solde totale
    var solde = state.getSolde(); //insertion au niveau de la div concernée

    this.div.innerHTML = solde.toString();
    console.log('update: ', solde);
  };

  return soldeView;
}();

exports.soldeView = soldeView;
},{}],"app.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var listeReservations_1 = require("./classes/listeReservations");

var reservation_1 = require("./classes/reservation");

var Appartement_1 = require("./classes/Appartement");

var soldeView_1 = require("./classes/soldeView"); //déclaration des variables


var btn = document.querySelector('#button');
var name = document.querySelector('#name');
var prenom = document.querySelector('#prenom');
var nmbr = document.querySelector('#nmbrC');
var restaurant = document.querySelector('#restaurant');
var parking = document.querySelector('#parking');
var menage = document.querySelector('#menage'); //instanciations des classes

var reservation = new reservation_1.Reservation(0);
var solde1 = new soldeView_1.soldeView();
var liste1 = new listeReservations_1.ListeReservationView(); //souscription 

reservation.subscribe(solde1);
reservation.subscribe(liste1); //écoute sur le bouton ADD

btn.addEventListener('click', function (e) {
  //éviter la réactualisation de la page
  e.preventDefault(); // console.log('clicked');
  //condition pour valider une reservation simple

  if (nmbr.valueAsNumber > 0 && name.value && prenom.value) {
    var appartement1 = new Appartement_1.Appartement(5000, name.value, prenom.value, nmbr.valueAsNumber, restaurant.checked, menage.checked, parking.checked);
    reservation.addAppartement(appartement1);
    console.log(reservation.getSolde());
  } else {
    alert('nombre de participants incorrecte,ou champs non renseignés');
  }
});
},{"./classes/listeReservations":"classes/listeReservations.ts","./classes/reservation":"classes/reservation.ts","./classes/Appartement":"classes/Appartement.ts","./classes/soldeView":"classes/soldeView.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50601" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map