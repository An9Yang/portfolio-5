import { Link, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Code,
  Palette,
  Rocket,
  Globe,
  Shield,
  Layers,
  Database,
  Smartphone,
  Gauge,
  CheckCircle,
  Bot,
  Clock,
  Star,
  ShoppingCart,
  Wrench,
  Languages,
  Activity,
  Server,
  Wifi,
  Target,
  Settings,
} from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "@/lib/api";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { HelloPayloadSchema } from "@/server/schema";

// Internationalization texts
const translations = {
  zh: {
    // Header
    aiPowered: "AI 智能开发",
    heroTitle: "从想法到网站",
    heroSubtitle: "只需一句话",
    heroDescription:
      "AI 全栈开发模板，专为创业者、电商从业者和创客打造。无需编程经验，描述你的需求，AI 帮你生成完整的网站代码。",

    // Hero Stats
    fiveMinutes: "5分钟",
    fromIdeaToLive: "从需求到上线",
    zeroCode: "0代码",
    aiGenerated: "纯 AI 生成",
    components: "50+",
    beautifulComponents: "精美组件",
    global: "全球",
    cdnAcceleration: "CDN 加速",

    // Use Cases
    ecommerce: "电商网站",
    ecommerceDesc: "我要做一个卖手工皂的网站，有产品展示、购物车和支付功能",
    ecommerceAi: "AI 自动生成完整电商系统",
    startup: "创业展示",
    startupDesc: "我的项目需要一个专业的展示页面，突出产品优势和团队介绍",
    startupAi: "AI 打造专业品牌形象",
    tools: "工具应用",
    toolsDesc: "做一个在线计算器，帮助用户计算装修成本和材料用量",
    toolsAi: "AI 构建实用工具",

    // Demo Section
    liveDemo: "实时体验",
    demoTitle: "看看这个模板的强大功能",
    demoDescription:
      "前后端实时通信，类型安全的API调用，这就是AI为你生成的专业级代码",
    serverTime: "服务器时间",
    manualSync: "手动同步服务器数据",
    loading: "加载中",
    error: "错误",
    ready: "就绪",
    connectionError: "连接错误",
    refreshData: "刷新数据",
    apiTest: "API 通信测试",
    typeSafeCommunication: "类型安全的服务器通信",
    enterMessage: "输入你的消息...",
    sending: "发送中...",
    send: "发送",
    requestFailed: "请求失败",
    serverResponse: "服务器响应",
    responseTime: "响应时间",
    statusCode: "状态码",
    timestamp: "时间戳",
    requestId: "请求ID",
    serverInfo: "服务器信息",

    // Performance
    performanceTitle: "性能指标 - AI 为你优化的每一个细节",
    connectionStatus: "连接状态",
    typeSafety: "类型安全",
    configuration: "配置工作",

    // Features
    aiHelp: "AI 助力创业",
    whyAi: "为什么选择 AI 生成代码？",
    whyDescription:
      "传统开发需要几个月，AI 只需几分钟。专业级的代码质量，零编程经验要求。",

    feature1Title: "5分钟上线",
    feature1Desc:
      "描述需求，AI 自动生成完整网站。全球 CDN 部署，用户访问秒开。",
    feature1Point: "从需求到上线只需5分钟",

    feature2Title: "专业级代码",
    feature2Desc:
      "TypeScript 全栈开发，类型安全，无运行时错误。代码质量媲美资深工程师。",
    feature2Point: "企业级安全与稳定性",

    feature3Title: "精美设计",
    feature3Desc:
      "50+ 现代化组件，响应式设计，适配所有设备。让你的产品脱颖而出。",
    feature3Point: "设计师级视觉效果",

    feature4Title: "极致性能",
    feature4Desc: "Rspack 构建，速度提升10倍。毫秒级热更新，开发体验丝滑流畅。",
    feature4Point: "比传统方案快10倍",

    feature5Title: "全栈方案",
    feature5Desc:
      "前后端一体化，数据库就绪，API 完善。电商、工具、展示应有尽有。",
    feature5Point: "无需额外技术栈",

    feature6Title: "移动优先",
    feature6Desc: "完美适配手机端，PWA 支持，离线访问。抓住移动互联网商机。",
    feature6Point: "移动端体验优化",

    // Tech Stack
    techStack: "技术栈",
    techTitle: "AI 为你选择最佳技术组合",
    techDescription:
      "无需纠结技术选型，AI 已经为你精选了最现代、最稳定的技术栈",

    reactLatest: "最新前端框架",
    typeSafetyTech: "类型安全",
    fastBuild: "10倍速构建",
    modernCss: "现代CSS",
    highPerformanceApi: "高性能API",
    modernRuntime: "现代运行时",

    // Comparison
    traditionalDev: "传统开发",
    months: "3-6个月",
    teamRequired: "需要团队配合",
    costHigh: "成本 ¥50万+",
    aiDev: "AI 开发",
    minutes: "5分钟",
    onePersonCan: "一个人即可",
    costZero: "成本 ¥0",
    efficiency: "效率提升",
    timesImprovement: "1000倍",
    timeSaved: "时间节省",
    costReduction: "成本降低",
    recommended: "推荐",

    // CTA
    startJourney: "开始你的AI之旅",
    ctaTitle: "准备好用 AI 实现你的创意了吗？",
    ctaDescription:
      "无论你是想做电商网站、展示页面，还是实用工具，AI 都能帮你在几分钟内生成专业代码。",
    startUsing: "开始使用 Step1.dev",
    viewCases: "查看更多案例",

    // Benefits
    freeTrial: "完全免费试用",
    quickLaunch: "5分钟即可上线",
    noExperience: "无需编程经验",
    globalCdn: "全球CDN加速",

    // Success Stories
    case1Name: "小李的手工店",
    case1Quote: "5分钟就搭建了完整的电商网站，订单量增长了300%！",
    case2Name: "创业团队",
    case2Quote: "节省了50万开发成本，产品快速验证市场需求",
    case3Name: "设计师小王",
    case3Quote: "作品展示网站让我接到了更多高质量客户",

    // Step1.dev branding
    step1Powered: "Step1.dev 出品",
    step1AI: "Step1.dev AI",
    step1Tech: "Step1.dev 技术",
    step1Demo: "Step1.dev 演示",
    step1Features: "Step1.dev 特性",
  },
  en: {
    // Header
    aiPowered: "AI-Powered Development",
    heroTitle: "From Idea to Website",
    heroSubtitle: "In One Sentence",
    heroDescription:
      "AI full-stack development template designed for entrepreneurs, e-commerce professionals, and makers. No programming experience required - just describe your needs and AI generates complete website code.",

    // Hero Stats
    fiveMinutes: "5 min",
    fromIdeaToLive: "Idea to Live",
    zeroCode: "0 Code",
    aiGenerated: "AI Generated",
    components: "50+",
    beautifulComponents: "Components",
    global: "Global",
    cdnAcceleration: "CDN",

    // Use Cases
    ecommerce: "E-commerce",
    ecommerceDesc:
      "I want to create a handmade soap website with product display, shopping cart and payment features",
    ecommerceAi: "AI auto-generates complete e-commerce system",
    startup: "Startup Showcase",
    startupDesc:
      "My project needs a professional showcase page highlighting product advantages and team introduction",
    startupAi: "AI creates professional brand image",
    tools: "Tool Application",
    toolsDesc:
      "Build an online calculator to help users calculate renovation costs and material usage",
    toolsAi: "AI builds practical tools",

    // Demo Section
    liveDemo: "Live Demo",
    demoTitle: "See This Template's Power",
    demoDescription:
      "Real-time frontend-backend communication, type-safe API calls - this is professional-grade code generated by AI",
    serverTime: "Server Time",
    manualSync: "Manual sync server data",
    loading: "Loading",
    error: "Error",
    ready: "Ready",
    connectionError: "Connection Error",
    refreshData: "Refresh Data",
    apiTest: "API Communication Test",
    typeSafeCommunication: "Type-safe server communication",
    enterMessage: "Enter your message...",
    sending: "Sending...",
    send: "Send",
    requestFailed: "Request Failed",
    serverResponse: "Server Response",
    responseTime: "Response Time",
    statusCode: "Status Code",
    timestamp: "Timestamp",
    requestId: "Request ID",
    serverInfo: "Server Info",

    // Performance
    performanceTitle: "Performance Metrics - AI Optimizes Every Detail",
    connectionStatus: "Connection",
    typeSafety: "Type Safety",
    configuration: "Configuration",

    // Features
    aiHelp: "AI Empowers Startups",
    whyAi: "Why Choose AI-Generated Code?",
    whyDescription:
      "Traditional development takes months, AI takes minutes. Professional code quality with zero programming experience required.",

    feature1Title: "5-Minute Launch",
    feature1Desc:
      "Describe requirements, AI auto-generates complete website. Global CDN deployment, instant user access.",
    feature1Point: "From idea to live in just 5 minutes",

    feature2Title: "Professional Code",
    feature2Desc:
      "TypeScript full-stack development, type-safe, no runtime errors. Code quality rivals senior engineers.",
    feature2Point: "Enterprise-grade security & stability",

    feature3Title: "Beautiful Design",
    feature3Desc:
      "50+ modern components, responsive design, all-device compatibility. Make your product stand out.",
    feature3Point: "Designer-level visual effects",

    feature4Title: "Ultimate Performance",
    feature4Desc:
      "Rspack build, 10x speed improvement. Millisecond hot reload, silky smooth development experience.",
    feature4Point: "10x faster than traditional solutions",

    feature5Title: "Full-Stack Solution",
    feature5Desc:
      "Frontend-backend integration, database ready, comprehensive APIs. E-commerce, tools, showcase - everything.",
    feature5Point: "No additional tech stack needed",

    feature6Title: "Mobile First",
    feature6Desc:
      "Perfect mobile adaptation, PWA support, offline access. Seize mobile internet opportunities.",
    feature6Point: "Mobile experience optimized",

    // Tech Stack
    techStack: "Tech Stack",
    techTitle: "AI Selects the Best Technology Stack",
    techDescription:
      "No need to worry about technology selection - AI has carefully chosen the most modern and stable tech stack",

    reactLatest: "Latest Frontend",
    typeSafetyTech: "Type Safety",
    fastBuild: "10x Faster Build",
    modernCss: "Modern CSS",
    highPerformanceApi: "High Performance API",
    modernRuntime: "Modern Runtime",

    // Comparison
    traditionalDev: "Traditional Dev",
    months: "3-6 months",
    teamRequired: "Team required",
    costHigh: "Cost $70k+",
    aiDev: "AI Development",
    minutes: "5 minutes",
    onePersonCan: "One person can do",
    costZero: "Cost $0",
    efficiency: "Efficiency Boost",
    timesImprovement: "1000x",
    timeSaved: "Time saved",
    costReduction: "Cost reduced",
    recommended: "Recommended",

    // CTA
    startJourney: "Start Your AI Journey",
    ctaTitle: "Ready to Realize Your Ideas with AI?",
    ctaDescription:
      "Whether you want to build e-commerce sites, showcase pages, or practical tools, AI can generate professional code in minutes.",
    startUsing: "Start Using Step1.dev",
    viewCases: "View More Cases",

    // Benefits
    freeTrial: "Completely Free Trial",
    quickLaunch: "Live in 5 minutes",
    noExperience: "No programming experience required",
    globalCdn: "Global CDN acceleration",

    // Success Stories
    case1Name: "Li's Handmade Store",
    case1Quote:
      "Built a complete e-commerce site in 5 minutes, orders increased by 300%!",
    case2Name: "Startup Team",
    case2Quote:
      "Saved $70k in development costs, quickly validated market demand",
    case3Name: "Designer Wang",
    case3Quote: "Portfolio website helped me get more high-quality clients",

    // Step1.dev branding
    step1Powered: "Powered by Step1.dev",
    step1AI: "Step1.dev AI",
    step1Tech: "Step1.dev Tech",
    step1Demo: "Step1.dev Demo",
    step1Features: "Step1.dev Features",
  },
};

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState("world");

  // Language detection and management
  const currentLang =
    searchParams.get("lang") ||
    (typeof navigator !== "undefined"
      ? navigator.language.startsWith("zh")
        ? "zh"
        : "en"
      : "en");

  const t =
    translations[currentLang as keyof typeof translations] || translations.en;

  const toggleLanguage = () => {
    const newLang = currentLang === "zh" ? "en" : "zh";
    setSearchParams({ lang: newLang });
  };

  const sayHello = useMutation({
    async mutationFn(payload: HelloPayloadSchema) {
      const startTime = Date.now();
      const response = await client.api.example.hello.$post({
        json: payload,
      });
      const endTime = Date.now();
      const data = await response.json();

      return {
        ...data,
        responseTime: endTime - startTime,
        statusCode: response.status,
        timestamp: new Date().toISOString(),
        requestId: Math.random().toString(36).substr(2, 9),
        serverInfo: {
          region: "US-East",
          nodeId: "node-" + Math.random().toString(36).substr(2, 4),
        },
      };
    },
  });

  const serverTime = useQuery({
    queryKey: ["server-timer"],
    async queryFn() {
      const startTime = Date.now();
      const result = await client.api.example.time.$get();
      const endTime = Date.now();
      const data = await result.json();

      return {
        ...data,
        responseTime: endTime - startTime,
        statusCode: result.status,
        timestamp: new Date().toISOString(),
      };
    },
    enabled: false, // Disable auto-fetch, only manual refresh
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-slate-50"
        >
          <Languages className="w-4 h-4 mr-2" />
          {currentLang === "zh" ? "EN" : "中文"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-slate-100 text-slate-700 border-slate-200 px-4 py-2 text-sm font-medium rounded-full">
              <Bot className="w-4 h-4 mr-2" />
              {t.step1Powered}
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {t.heroTitle}
              <br />
              <span className="text-slate-600">{t.heroSubtitle}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t.heroDescription}
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Clock className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {t.fiveMinutes}
                </div>
                <div className="text-sm text-slate-600">{t.fromIdeaToLive}</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Bot className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {t.zeroCode}
                </div>
                <div className="text-sm text-slate-600">{t.aiGenerated}</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Palette className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {t.components}
                </div>
                <div className="text-sm text-slate-600">
                  {t.beautifulComponents}
                </div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Globe className="w-6 h-6 text-slate-700 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {t.global}
                </div>
                <div className="text-sm text-slate-600">
                  {t.cdnAcceleration}
                </div>
              </div>
            </div>

            {/* AI Use Cases */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl">
                  <ShoppingCart className="w-8 h-8 text-slate-700 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {t.ecommerce}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    "{t.ecommerceDesc}"
                  </p>
                  <div className="text-xs text-slate-500 flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {t.ecommerceAi}
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl">
                  <Rocket className="w-8 h-8 text-slate-700 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {t.startup}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    "{t.startupDesc}"
                  </p>
                  <div className="text-xs text-slate-500 flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {t.startupAi}
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl">
                  <Wrench className="w-8 h-8 text-slate-700 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {t.tools}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">"{t.toolsDesc}"</p>
                  <div className="text-xs text-slate-500 flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {t.toolsAi}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-slate-700 border-slate-200 px-4 py-2 text-sm font-medium rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              {t.step1Demo}
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t.demoTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.demoDescription}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8 bg-white border border-slate-200 rounded-2xl">
              {/* Server Time and API Test */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {t.serverTime}
                      </h3>
                      <p className="text-sm text-slate-600">{t.manualSync}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          serverTime.isLoading
                            ? "bg-yellow-500 animate-pulse"
                            : serverTime.error
                              ? "bg-red-500"
                              : serverTime.data
                                ? "bg-green-500"
                                : "bg-slate-400"
                        }`}
                      ></div>
                      <span className="text-xs text-slate-600 font-medium">
                        {serverTime.isLoading
                          ? t.loading
                          : serverTime.error
                            ? t.error
                            : serverTime.data
                              ? t.ready
                              : t.ready}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    {serverTime.isLoading ? (
                      <div className="animate-pulse space-y-3">
                        <div className="h-8 bg-slate-200 rounded w-48 mx-auto"></div>
                        <div className="h-4 bg-slate-200 rounded w-32 mx-auto"></div>
                      </div>
                    ) : serverTime.error ? (
                      <div className="text-center text-red-600 font-medium">
                        {t.connectionError}
                      </div>
                    ) : serverTime.data ? (
                      <div className="text-center space-y-2">
                        <div className="text-2xl font-mono font-bold text-slate-900">
                          {new Date(
                            serverTime.data.serverTime,
                          ).toLocaleTimeString()}
                        </div>
                        <div className="text-sm text-slate-600">
                          {new Date(
                            serverTime.data.serverTime,
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-slate-500">
                        <Clock className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-sm">
                          Click refresh to get server time
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Server Response Details */}
                  {serverTime.data && (
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">
                          {t.responseTime}:
                        </span>
                        <span className="font-mono text-slate-900">
                          {serverTime.data.responseTime}ms
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">{t.statusCode}:</span>
                        <span className="font-mono text-green-600">
                          {serverTime.data.statusCode}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">{t.timestamp}:</span>
                        <span className="font-mono text-slate-700 text-xs">
                          {new Date(
                            serverTime.data.timestamp,
                          ).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => serverTime.refetch()}
                    disabled={serverTime.isLoading}
                    className="w-full border-slate-200 text-slate-700 hover:bg-slate-100"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    {t.refreshData}
                  </Button>
                </div>

                {/* Message API Test */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {t.apiTest}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {t.typeSafeCommunication}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.enterMessage}
                        className="flex-1 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !sayHello.isPending) {
                            sayHello.mutate({ message });
                          }
                        }}
                      />
                      <Button
                        onClick={() => sayHello.mutate({ message })}
                        disabled={sayHello.isPending || !message.trim()}
                        className="bg-slate-900 hover:bg-slate-800 text-white"
                      >
                        {sayHello.isPending ? (
                          <>
                            <Wifi className="w-4 h-4 mr-2 animate-pulse" />
                            {t.sending}
                          </>
                        ) : (
                          <>
                            <Server className="w-4 h-4 mr-2" />
                            {t.send}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Enhanced Response Display */}
                    {(sayHello.data || sayHello.error) && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg border border-slate-200 bg-white">
                          {sayHello.error ? (
                            <div className="flex items-center gap-2 text-red-600">
                              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                              <span className="text-sm font-medium">
                                {t.requestFailed}
                              </span>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-slate-900 mb-1">
                                    {t.serverResponse}
                                  </div>
                                  <div className="text-sm text-slate-700 p-2 bg-slate-50 rounded border">
                                    "{sayHello.data?.message}"
                                  </div>
                                </div>
                              </div>

                              {/* Detailed Response Info */}
                              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                                <div className="text-xs">
                                  <span className="text-slate-500">
                                    {t.responseTime}:
                                  </span>
                                  <span className="ml-1 font-mono text-slate-900">
                                    {sayHello.data?.responseTime}ms
                                  </span>
                                </div>
                                <div className="text-xs">
                                  <span className="text-slate-500">
                                    {t.statusCode}:
                                  </span>
                                  <span className="ml-1 font-mono text-green-600">
                                    {sayHello.data?.statusCode}
                                  </span>
                                </div>
                                <div className="text-xs">
                                  <span className="text-slate-500">
                                    {t.requestId}:
                                  </span>
                                  <span className="ml-1 font-mono text-slate-700">
                                    {sayHello.data?.requestId}
                                  </span>
                                </div>
                                <div className="text-xs">
                                  <span className="text-slate-500">
                                    {t.serverInfo}:
                                  </span>
                                  <span className="ml-1 font-mono text-slate-700">
                                    {sayHello.data?.serverInfo?.region}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="border-t border-slate-200 pt-6">
                <h4 className="text-sm font-medium text-slate-700 mb-4 text-center">
                  {t.performanceTitle}
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {serverTime.isLoading
                        ? "..."
                        : serverTime.error
                          ? "✗"
                          : serverTime.data
                            ? "✓"
                            : "○"}
                    </div>
                    <div className="text-xs text-slate-600">
                      {t.connectionStatus}
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {serverTime.data?.responseTime || "<50"}ms
                    </div>
                    <div className="text-xs text-slate-600">
                      {t.responseTime}
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      100%
                    </div>
                    <div className="text-xs text-slate-600">{t.typeSafety}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      0
                    </div>
                    <div className="text-xs text-slate-600">
                      {t.configuration}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 px-4 py-2 text-sm font-medium rounded-full">
              <Target className="w-4 h-4 mr-2" />
              {t.step1Features}
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t.whyAi}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.whyDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <Rocket className="w-8 h-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.feature1Title}
              </h3>
              <p className="text-slate-600 mb-4">{t.feature1Desc}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t.feature1Point}</span>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <Shield className="w-8 h-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.feature2Title}
              </h3>
              <p className="text-slate-600 mb-4">{t.feature2Desc}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t.feature2Point}</span>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <Palette className="w-8 h-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.feature3Title}
              </h3>
              <p className="text-slate-600 mb-4">{t.feature3Desc}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t.feature3Point}</span>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <Gauge className="w-8 h-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.feature4Title}
              </h3>
              <p className="text-slate-600 mb-4">{t.feature4Desc}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t.feature4Point}</span>
              </div>
            </Card>

            {/* Feature 5 */}
            <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <Database className="w-8 h-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.feature5Title}
              </h3>
              <p className="text-slate-600 mb-4">{t.feature5Desc}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t.feature5Point}</span>
              </div>
            </Card>

            {/* Feature 6 */}
            <Card className="p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <Smartphone className="w-8 h-8 text-slate-700 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {t.feature6Title}
              </h3>
              <p className="text-slate-600 mb-4">{t.feature6Desc}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t.feature6Point}</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-slate-700 border-slate-200 px-4 py-2 text-sm font-medium rounded-full">
              <Settings className="w-4 h-4 mr-2" />
              {t.step1Tech}
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t.techTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.techDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {/* Frontend */}
            <div className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <Code className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-1">React 19</h4>
              <p className="text-sm text-slate-600">{t.reactLatest}</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <Layers className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-1">TypeScript</h4>
              <p className="text-sm text-slate-600">{t.typeSafetyTech}</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <Zap className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-1">Rspack</h4>
              <p className="text-sm text-slate-600">{t.fastBuild}</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <Palette className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-1">Tailwind</h4>
              <p className="text-sm text-slate-600">{t.modernCss}</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <Database className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-1">Hono</h4>
              <p className="text-sm text-slate-600">{t.highPerformanceApi}</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <Globe className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-1">Deno</h4>
              <p className="text-sm text-slate-600">{t.modernRuntime}</p>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border border-slate-200 rounded-xl text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">
                {t.traditionalDev}
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-2">
                {t.months}
              </div>
              <div className="text-sm text-slate-600">{t.teamRequired}</div>
              <div className="text-sm text-slate-600">{t.costHigh}</div>
            </Card>

            <Card className="p-6 bg-slate-900 text-white rounded-xl text-center relative">
              <div className="absolute top-2 right-2">
                <Badge className="bg-white text-slate-900 text-xs px-2 py-1">
                  {t.recommended}
                </Badge>
              </div>
              <div className="text-4xl font-bold mb-2">{t.aiDev}</div>
              <div className="text-lg font-semibold mb-2">{t.minutes}</div>
              <div className="text-sm text-slate-300">{t.onePersonCan}</div>
              <div className="text-sm text-slate-300">{t.costZero}</div>
            </Card>

            <Card className="p-6 bg-white border border-slate-200 rounded-xl text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">
                {t.efficiency}
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-2">
                {t.timesImprovement}
              </div>
              <div className="text-sm text-slate-600">{t.timeSaved}</div>
              <div className="text-sm text-slate-600">{t.costReduction}</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="text-center py-4">
        <Link to="404" className="underline text-foreground/40">
          404 Page
        </Link>
      </section>
    </div>
  );
}
